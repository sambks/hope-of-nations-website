export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
};

export const posts: NewsPost[] = [
  {
    slug: "you-are-welcome-this-sunday",
    title: "You are welcome this Sunday",
    date: "2026-10-26",
    excerpt:
      "Sunday praise and worship is 10:00–12:00 at 387 Main Road, Wynberg. Come as you are. You do not need to have it all figured out.",
    paragraphs: [
      "Hope of Nations Church gathers every Sunday for praise, worship, teaching, and fellowship. The service runs from 10:00 to 12:00 at 387 Main Road, Wynberg, Cape Town.",
      "This is a multicultural church. People from different nations worship as one family. If you are exploring faith, looking for a church, or simply need a place to belong, you are welcome.",
      "There is also a Friday evening gathering from 18:00 to 19:00, and Wednesday online prayer from 20:30 to 21:30. Plan your visit and we will watch for you.",
    ],
  },
  {
    slug: "i-arise-and-shine",
    title: "This Sunday we say, I Arise and Shine",
    date: "2026-10-20",
    excerpt:
      "Each Sunday the church speaks the declaration together: a reminder of identity, hope, and the courage to face what the week brings.",
    paragraphs: [
      "Every Sunday at Hope of Nations Church we speak the declaration I Arise and Shine together. It is a reminder that the glory of God has risen on us, and that Christ in us is the hope of glory.",
      "The words name real pressures: sickness, poverty, limitation, and the challenges of ordinary life. We speak them as a church family, not as a performance.",
      "If you have never heard it, come on Sunday. We will say it with you.",
    ],
  },
  {
    slug: "saturday-outreach",
    title: "Saturday hope, beyond the walls",
    date: "2026-10-12",
    excerpt:
      "Every Saturday a team goes into surrounding communities to listen, encourage, and share the Word of God with people who may never walk in first.",
    paragraphs: [
      "Evangelism at Hope of Nations Church is not a programme that stays inside the building. Every Saturday a team goes out to meet people where they already are.",
      "The aim is to listen, encourage, and share the Word of God with both believers and people who do not yet know Christ. Some of the people we meet may never walk through a church door first.",
      "If you want to join the team, speak to us on Sunday or send a message. We will tell you where to meet.",
    ],
  },
  {
    slug: "a-family-of-nations",
    title: "Different nations, one family in Wynberg",
    date: "2026-10-04",
    excerpt:
      "From three people in a Plumstead home in 2004, Hope of Nations Church is now a multinational family on Main Road, Wynberg.",
    paragraphs: [
      "Hope of Nations Church began in 2004 with three people gathered in a household in Plumstead. The church was formerly known as African Revival Church. The name we carry now reflects a wider call: different nations, one hope, one family.",
      "Pastor Claudine Bukasa shepherds the church into this chapter, honouring the foundation laid by founder Rev. Jean Paul Bukasa.",
      "Women, men, youth, and Sunday school all have a place here. So does anyone who is still finding their way.",
    ],
  },
];

export function getPosts() {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Johannesburg",
  }).format(new Date(`${iso}T12:00:00+02:00`));
}
