export type Gathering = {
  id: string;
  title: string;
  weekday: number;
  hour: number;
  minute: number;
  showTime: boolean;
  place: string;
  href: string;
  fallback: string;
};

export const gatherings: Gathering[] = [
  {
    id: "sunday",
    title: "Sunday Praise & Worship",
    weekday: 0,
    hour: 10,
    minute: 0,
    showTime: true,
    place: "387 Main Road, Wynberg",
    href: "/im-new",
    fallback: "Sunday · 10:00–12:00",
  },
  {
    id: "wednesday",
    title: "Wednesday Online Prayer",
    weekday: 3,
    hour: 20,
    minute: 30,
    showTime: true,
    place: "Online",
    href: "/prayer",
    fallback: "Wednesday · 20:30–21:30",
  },
  {
    id: "friday",
    title: "Friday Evening Gathering",
    weekday: 5,
    hour: 18,
    minute: 0,
    showTime: true,
    place: "387 Main Road, Wynberg",
    href: "/services",
    fallback: "Friday · 18:00–19:00",
  },
  {
    id: "saturday",
    title: "Saturday Evangelism",
    weekday: 6,
    hour: 23,
    minute: 59,
    showTime: false,
    place: "Surrounding communities",
    href: "/evangelism",
    fallback: "Saturday · community outreach",
  },
];

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function johannesburgNow(from = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-ZA", {
      timeZone: "Africa/Johannesburg",
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(from)
      .map((part) => [part.type, part.value]),
  );
  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return {
    weekday: weekdayMap[parts.weekday] ?? 0,
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour),
    minute: Number(parts.minute),
  };
}

function addDays(year: number, month: number, day: number, days: number) {
  const utc = new Date(Date.UTC(year, month - 1, day + days));
  return {
    year: utc.getUTCFullYear(),
    month: utc.getUTCMonth() + 1,
    day: utc.getUTCDate(),
  };
}

export function upcomingGatherings(from = new Date()) {
  const now = johannesburgNow(from);
  return gatherings
    .map((gathering) => {
      let delta = (gathering.weekday - now.weekday + 7) % 7;
      const alreadyStarted =
        delta === 0 &&
        (now.hour > gathering.hour || (now.hour === gathering.hour && now.minute >= gathering.minute));
      if (alreadyStarted) delta = 7;
      const date = addDays(now.year, now.month, now.day, delta);
      const clock = `${String(gathering.hour).padStart(2, "0")}:${String(gathering.minute).padStart(2, "0")}`;
      const label = gathering.showTime
        ? `${weekdays[gathering.weekday]} ${date.day} ${months[date.month - 1]} · ${clock}`
        : `${weekdays[gathering.weekday]} ${date.day} ${months[date.month - 1]}`;
      return { ...gathering, label, sort: delta * 1440 + gathering.hour * 60 + gathering.minute };
    })
    .sort((a, b) => a.sort - b.sort);
}
