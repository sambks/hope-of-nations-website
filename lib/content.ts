export const site = {
  name: "Hope of Nations Church",
  formerName: "African Revival Church",
  shortName: "HNC",
  tagline: "Place of hope & transformation",
  altTagline: "Different Nations. One Hope. One Family.",
  mission: "Bringing Hope. Transforming Lives. Reaching Nations.",
  vision: "Bringing Hope and Transformation Into People's Lives",
  heroHeadline: "Bring Hope and Transforming Lives",
  heroSubheading:
    "A growing multicultural church committed to helping people discover hope, encounter Jesus, find community and make a difference beyond the walls of the church.",
  description:
    "Hope of Nations Church is a growing multicultural Christian church in Wynberg, Cape Town, committed to bringing hope and transformation into people's lives through Jesus Christ, community, prayer, worship and outreach. Everyone is welcome.",
  longDescription:
    "Hope of Nations Church is a growing, multicultural Christian church based in Wynberg, Cape Town. Founded in 2004 from a small gathering of three people in a household in Plumstead, the church has grown into a multinational community with a heart for bringing hope and transformation into people's lives. With a Congolese foundation and people from different nations and backgrounds, Hope of Nations Church seeks to create a welcoming environment where people can encounter Jesus Christ, grow in faith, build community and serve others.",
  url: "https://hopeofnationschurch.org",
  locale: "en_ZA",
  address: {
    line1: "387 Main Road",
    suburb: "Wynberg",
    city: "Cape Town",
    country: "South Africa",
    display: "387 Main Road, Wynberg, Cape Town, South Africa",
  },
  maps: {
    query: "387 Main Road, Wynberg, Cape Town",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=387%20Main%20Road%2C%20Wynberg%2C%20Cape%20Town",
    embed:
      "https://maps.google.com/maps?q=387%20Main%20Road%20Wynberg%20Cape%20Town&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  services: [
    {
      name: "Sunday Praise & Worship",
      day: "Sunday",
      time: "10:00–12:00",
      note: "Our main gathering: praise, worship, teaching, fellowship and spiritual encouragement. Everyone is welcome.",
    },
    {
      name: "Friday Evening Gathering",
      day: "Friday",
      time: "18:00–19:00",
      note: "Another opportunity for the church family to come together during the week.",
    },
  ],
  onlinePrayer: {
    day: "Wednesday",
    time: "20:30–21:30",
    label: "Wednesday Online Prayer",
    whatsappUrl:
      process.env.NEXT_PUBLIC_WHATSAPP_PRAYER_URL ??
      "https://chat.whatsapp.com/CHURCH_TO_SUPPLY",
    whatsappPending: true,
  },
  socials: {
    facebook: "https://www.facebook.com/HNC2005",
    instagram: "https://www.instagram.com/hopeofnationschurch.sa",
  },
  phones: [
    {
      display: "+27 74 648 8039",
      tel: "tel:+27746488039",
      whatsapp: "https://wa.me/27746488039",
    },
    {
      display: "+27 65 386 5090",
      tel: "tel:+27653865090",
      whatsapp: "https://wa.me/27653865090",
    },
  ],
  contactEmail: "[church to confirm]",
} as const;

export const photos = {
  hero: {
    src: "/photos/welcome.jpg",
    alt: "Pastor Claudine welcoming a church member with a warm embrace",
  },
  communityHands: {
    src: "/photos/community-hands.jpg",
    alt: "People of different backgrounds holding hands together in unity",
  },
  welcome: {
    src: "/photos/welcome.jpg",
    alt: "Pastor Claudine welcoming a church member with a warm embrace",
  },
  congregation: {
    src: "/photos/congregation.jpg",
    alt: "Congregation gathered together during a service at Hope of Nations Church",
  },
  pastor: {
    src: "/photos/pastor-claudine.jpg",
    alt: "Pastor Claudine Bukasa",
  },
  sundaySchool: {
    src: "/photos/sunday-school.jpg",
    alt: "Children and young people dancing and worshipping together",
  },
  youth: {
    src: "/photos/youth-1.jpg",
    alt: "Youth ministry friends gathered outdoors",
  },
  youthGathering: {
    src: "/photos/youth-2.jpg",
    alt: "Young people sitting together in fellowship",
  },
  mens: {
    src: "/photos/mens.jpg",
    alt: "Men’s ministry gathering around the table",
  },
  worship: {
    src: "/photos/worship.jpg",
    alt: "A young woman worshipping with her church family",
  },
  community: [
    {
      src: "/photos/welcome.jpg",
      alt: "A warm welcome between Pastor Claudine and a church member",
    },
    {
      src: "/photos/congregation.jpg",
      alt: "Our multicultural congregation gathered in worship",
    },
    {
      src: "/photos/youth-2.jpg",
      alt: "Young people belonging together",
    },
    {
      src: "/photos/sunday-school.jpg",
      alt: "Children full of joy in church",
    },
  ],
  evangelism: {
    src: "/photos/evangelism-prayer.jpg",
    alt: "Two men sitting together in prayer and encouragement",
  },
  prayer: {
    src: "/photos/worship.jpg",
    alt: "Worship and prayer at Hope of Nations Church",
  },
  story: {
    src: "/photos/welcome.jpg",
    alt: "A church that feels like family",
  },
  leadership: {
    src: "/photos/pastor-claudine.jpg",
    alt: "Pastor Claudine Bukasa",
  },
  deliverance: {
    src: "/photos/deliverance-prayer.jpg",
    alt: "A group of people praying for someone",
  },
  baptism: {
    src: "/photos/baptism.jpg",
    alt: "Baptism at Hope of Nations Church",
  },
  ministries: {
    womens: "/photos/welcome.jpg",
    mens: "/photos/mens.jpg",
    youth: "/photos/youth-1.jpg",
    sundaySchool: "/photos/sunday-school.jpg",
    evangelism: "/photos/evangelism-prayer.jpg",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    featured: {
      href: "/im-new",
      title: "Plan your first Sunday",
      body: "Times, directions, and what to expect.",
    },
    children: [
      { href: "/about", label: "About Hope of Nations", note: "Who we are, and who is welcome" },
      { href: "/about/our-story", label: "Our Story", note: "2004 to today, a family of nations" },
      { href: "/about/leadership", label: "Leadership", note: "Pastor Claudine Bukasa" },
      { href: "/about/declaration", label: "I Arise and Shine", note: "The Sunday declaration" },
    ],
  },
  {
    href: "/ministries",
    label: "Ministries",
    featured: {
      href: "/evangelism",
      title: "Saturday outreach",
      body: "Hope that goes beyond the walls.",
    },
    children: [
      { href: "/ministries", label: "All ministries", note: "Find your people" },
      { href: "/ministries/womens", label: "Women", note: "Connect. Encourage. Grow." },
      { href: "/ministries/mens", label: "Men", note: "Faith. Friendship. Service." },
      { href: "/ministries/youth", label: "Youth", note: "Belong. Ask. Grow." },
      { href: "/ministries/sunday-school", label: "Sunday School", note: "Ages 2–15" },
    ],
  },
  { href: "/evangelism", label: "Evangelism" },
  { href: "/prayer", label: "Prayer" },
  { href: "/news", label: "News" },
  { href: "/deliverance", label: "Deliverance" },
  { href: "/baptism", label: "Baptism" },
  { href: "/im-new", label: "I'm New" },
] as const;

export const footerLinks = [
  { href: "/im-new", label: "I'm New" },
  { href: "/prayer", label: "Prayer" },
  { href: "/deliverance", label: "Deliverance" },
  { href: "/baptism", label: "Baptism" },
  { href: "/evangelism", label: "Evangelism" },
  { href: "/ministries", label: "Ministries" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export const keywords = [
  "Hope of Nations Church",
  "church in Wynberg",
  "church near me",
  "multicultural church Cape Town",
  "Sunday church Cape Town",
  "prayer Cape Town",
  "Wynberg church",
  "Cape Town South Africa church",
  "African Revival Church",
];

export const storyTimeline = [
  {
    year: "2004",
    title: "A household in Plumstead",
    body: "Hope of Nations Church began in 2004 in a household in Plumstead. Only three people were gathered together. The early foundation was built around faith, prayer, fellowship, and a desire to share the message of Christ.",
  },
  {
    year: "Growth",
    title: "From three people to more than a thousand lives",
    body: "Over more than two decades the church has grown from that small gathering into a multinational community, having welcomed and impacted more than 1,000 people along the way.",
  },
  {
    year: "A new name",
    title: "From African Revival Church to Hope of Nations",
    body: "The church was formerly known as African Revival Church. The name Hope of Nations reflects a broader outlook: reaching people from different nations and walks of life with the hope of Christ.",
  },
  {
    year: "Nations",
    title: "Different nations, one family",
    body: "With a Congolese foundation, the church has grown beyond one nationality. People from different backgrounds worship together, build relationships, and belong: different stories, one hope, one faith, one family.",
  },
  {
    year: "Wynberg",
    title: "A home on Main Road",
    body: "Today the church gathers at 387 Main Road, Wynberg, Cape Town, a visible place of hope on a well-walked street.",
  },
  {
    year: "2023",
    title: "A new chapter of leadership",
    body: "Pastor Claudine Bukasa now shepherds the church, continuing the foundation that was laid and looking toward the future: reaching more people, strengthening the family, and expanding the church’s impact.",
  },
  {
    year: "Today",
    title: "The same hope, a continuing mission",
    body: "Every week people gather for worship, prayer, and fellowship, and every Saturday hope is carried into surrounding communities. If you are looking for a church, this could be yours.",
  },
  {
    year: "Tomorrow",
    title: "Reaching more people, more communities, more nations",
    body: "The church looks toward the future with a desire to reach more people, transform more lives, and carry the hope of Christ beyond these walls.",
  },
];

export const declarationPreview = [
  "I arise and shine, for my light has come.",
  "The glory of God has risen upon me.",
  "I am the light of the world.",
  "Christ in me is the hope of glory.",
];

export const declarationFull = {
  title: "I Arise and Shine",
  intro:
    "Each Sunday we speak this declaration together, a reminder of identity, hope, God’s glory, and the courage to face life’s challenges.",
  lines: [
    "I arise and shine,",
    "For my light has come.",
    "The glory of God has risen upon me.",
    "I reflect the glory of God in all areas of my life.",
    "I am the light of the world.",
    "Therefore, I shine in every dark situation that I face.",
    "Christ in me is the hope of glory.",
    "His presence in me empowers me to triumph",
    "Over death,",
    "Over sickness,",
    "Over poverty,",
    "Over every limitation,",
    "And over every challenge this life may bring.",
    "In Jesus Christ’s name,",
    "Amen.",
  ],
};

export const ministries = [
  {
    slug: "womens",
    name: "Women's Ministry",
    tagline: "Connect. Encourage. Grow.",
    href: "/ministries/womens",
    summary:
      "A place for women to connect, encourage one another, grow spiritually, and walk together through different seasons of life.",
    image: photos.ministries.womens,
  },
  {
    slug: "mens",
    name: "Men's Ministry",
    tagline: "Faith. Friendship. Service.",
    href: "/ministries/mens",
    summary:
      "Opportunities for men to build relationships, grow in faith, encourage one another, and develop as men of faith and service.",
    image: photos.ministries.mens,
  },
  {
    slug: "youth",
    name: "Youth Ministry",
    tagline: "Belong. Ask. Grow.",
    href: "/ministries/youth",
    summary:
      "A space where young people can build relationships, learn about Christ, ask questions, grow spiritually, and find their identity in this family.",
    image: photos.ministries.youth,
  },
  {
    slug: "sunday-school",
    name: "Sunday School",
    tagline: "Learn. Belong. Grow.",
    href: "/ministries/sunday-school",
    summary:
      "For children ages 2–15. They learn about God in an age-appropriate way, growing in God’s Word and building a meaningful relationship with the church.",
    image: photos.ministries.sundaySchool,
  },
  {
    slug: "evangelism",
    name: "Evangelism",
    tagline: "Go. Encourage. Share.",
    href: "/evangelism",
    summary:
      "Every Saturday the church takes hope into surrounding communities, meeting people where they are and sharing the Word of God.",
    image: photos.ministries.evangelism,
  },
] as const;

export const evangelismSteps = [
  { title: "Meet", body: "We meet people where they are, in the community, not only inside a church building." },
  { title: "Listen", body: "We listen. The purpose is not simply to preach at people." },
  { title: "Encourage", body: "We encourage people, including believers who need strengthening." },
  { title: "Share", body: "We share the Word of God with both believers and those who do not yet know Christ." },
  { title: "Support", body: "We offer spiritual support and care for people’s wellbeing." },
  { title: "Invite", body: "We introduce people to the hope found in Christ, including those who may never walk through a church door first." },
];

export const churchFor = [
  "People who already follow Jesus",
  "People who are exploring Christianity",
  "People searching for a church",
  "People who need prayer",
  "People going through difficult circumstances",
  "Families, young people, and children",
  "People from different nations and cultures",
  "People who want to serve or learn more about Jesus",
];

export const coreInvites = [
  "Discover hope",
  "Encounter Jesus Christ",
  "Grow in your faith",
  "Find a spiritual family",
  "Receive prayer and encouragement",
  "Serve others and develop your gifts",
  "Reach your community",
  "Share the hope of Christ",
];

export const privacyNote =
  "Confidentiality note: [church to confirm exact wording before publishing]. Prayer requests are treated with care. Only a small pastoral team will read what you share. Anonymous requests are honoured without follow-up unless you ask to be contacted.";
