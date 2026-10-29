import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlendPhoto } from "@/components/ui/BlendPhoto";
import { Timeline } from "@/components/story/Timeline";
import { WhatsAppPrayer } from "@/components/prayer/WhatsAppPrayer";
import { declarationPreview, ministries, photos, site } from "@/lib/content";

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-globe" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 19.2c1.4-3.2 4-4.8 7-4.8s5.6 1.6 7 4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconHands() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-globe" fill="none" aria-hidden>
      <path d="M8 13v-2.5a1.5 1.5 0 1 1 3 0V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 12.5V8.8a1.5 1.5 0 1 1 3 0V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 12.2V9.6a1.5 1.5 0 1 1 3 0V14c0 2.4-1.6 4.5-5 6-3.4-1.5-5-3.6-5-6v-1.8a1.5 1.5 0 1 1 3 0V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-globe" fill="none" aria-hidden>
      <path d="M5 5.5h6.5A3.5 3.5 0 0 1 15 9v10.5H8.5A3.5 3.5 0 0 0 5 16V5.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 9h4v10.5h-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="bg-white pt-28 pb-16 lg:pt-16 lg:pb-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] leading-[1.08] text-navy sm:text-5xl lg:text-[3.4rem]">
            {site.heroHeadline}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted">{site.heroSubheading}</p>
          <div className="mt-8">
            <Button href="/im-new" variant="navy">
              Plan Your Visit →
            </Button>
          </div>
        </div>
        <BlendPhoto
          src={photos.communityHands.src}
          alt={photos.communityHands.alt}
          className="mx-auto aspect-[4/5] w-full max-w-[420px] min-h-[280px] lg:mx-0 lg:min-h-[380px]"
          priority
        />
      </Container>
    </section>
  );
}

export function StatsStrip() {
  const stats = [
    { value: "2004", label: "Founded in Plumstead" },
    { value: "1,000+", label: "Lives welcomed" },
    { value: "20+", label: "Years of ministry" },
    { value: "10:00", label: "Sunday praise & worship" },
  ];

  return (
    <section className="bg-navy">
      <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-white ${i > 0 ? "lg:border-l lg:border-white/15 lg:pl-8" : ""}`}
          >
            <p className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm text-white/65">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

const decisions = [
  {
    href: "/im-new",
    title: "I'm New Here",
    body: "Curious about visiting? We will walk you through what to expect, where to go, and how the morning feels.",
    cta: "Plan Your Visit",
    icon: <IconUser />,
  },
  {
    href: "/prayer",
    title: "I Need Prayer",
    body: "You do not have to be a member. You do not even have to share your name. Just tell us how to pray.",
    cta: "Request Prayer",
    icon: <IconHands />,
  },
  {
    href: "/about",
    title: "I Want to Know More",
    body: "Exploring Jesus, looking for a spiritual family, or ready to get involved? Start with our story, ministries, and Saturday outreach.",
    cta: "Explore",
    icon: <IconBook />,
  },
];

export function WhereAreYou() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="Start here"
          title="Where are you today?"
          description="Wherever you are arriving from, there is a clear next step. You do not have to figure out the whole church first."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {decisions.map((card) => (
            <div key={card.href}>
              {card.icon}
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-navy">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{card.body}</p>
              <Link href={card.href} className="mt-5 inline-block text-sm font-semibold text-globe">
                {card.cta} →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function OurMessage() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="About Hope of Nations"
            title="Hope is for everyone"
            description="The message of Christ is for everyone. Hope should not remain inside the church. It should be carried into families, communities, and everyday life."
          />
          <p className="mt-5 text-base leading-7 text-muted">
            {site.mission} You do not need to have everything figured out before you come. This is a place to discover
            hope, encounter Jesus, grow in faith, and find a spiritual family.
          </p>
          <Button href="/about/our-story" className="mt-8" variant="navy">
            Discover Our Story
          </Button>
        </div>
        <BlendPhoto
          src={photos.welcome.src}
          alt={photos.welcome.alt}
          className="mx-auto aspect-[5/4] w-full max-w-[440px] min-h-[260px] lg:mx-0"
          variant="beige"
        />
      </Container>
    </section>
  );
}

export function EvangelismBand() {
  const steps = ["Meet", "Listen", "Encourage", "Share", "Support"];
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <BlendPhoto
          src={photos.evangelism.src}
          alt={photos.evangelism.alt}
          className="mx-auto aspect-[5/4] w-full max-w-[440px] min-h-[240px] lg:mx-0"
        />
        <div>
          <SectionHeader
            eyebrow="Beyond these walls"
            title="Hope doesn’t stay inside these walls"
            description="Every Saturday a team goes into surrounding communities to meet people where they are, listen, encourage, share the Word of God, and bring hope beyond the building."
          />
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-navy">
            {steps.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <Button href="/evangelism" className="mt-8" variant="navy">
            Join Saturday Evangelism
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function StoryTeaser() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="Our story"
          title="From three people in a Plumstead home to a family of nations"
          description="Founded in 2004. Formerly African Revival Church. More than 1,000 lives welcomed along the way, and the journey continues."
        />
        <div className="mt-12">
          <Timeline compact />
        </div>
        <Button href="/about/our-story" className="mt-10" variant="navy">
          Read Our Full Story
        </Button>
      </Container>
    </section>
  );
}

export function OurCommunity() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container className="max-w-2xl text-center">
        <SectionHeader
          align="center"
          eyebrow="Our community"
          title="Different nations, one family"
          description="Different backgrounds. Different stories. One hope. One faith. One family."
        />
      </Container>
    </section>
  );
}

export function MinistriesGrid() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="Ministries"
          title="A place to grow, serve, and belong"
          description="Wherever you are in life, there is a table with space for you."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((m) => (
            <div key={m.slug}>
              <BlendPhoto src={m.image} alt={m.name} className="aspect-[16/9] w-full max-h-[200px]" sizes="(min-width: 1024px) 30vw, 100vw" />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-globe">{m.tagline}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-navy">{m.name}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{m.summary}</p>
              <Link href={m.href} className="mt-4 inline-block text-sm font-semibold text-globe">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PrayerBand() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <BlendPhoto
          src={photos.worship.src}
          alt={photos.worship.alt}
          className="mx-auto aspect-[4/5] w-full max-w-[360px] min-h-[280px] lg:mx-0"
          variant="beige"
        />
        <div>
          <SectionHeader
            eyebrow="Prayer"
            title="Need someone to pray with you?"
            description="You do not have to face difficult situations alone. Share your name, or stay anonymous. Ask for follow-up, or simply ask us to pray."
          />
          <Button href="/prayer" className="mt-8" variant="navy">
            Request Prayer
          </Button>
          <div className="mt-8">
            <WhatsAppPrayer />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PastorSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <BlendPhoto
          src={photos.pastor.src}
          alt={photos.pastor.alt}
          className="mx-auto aspect-[4/5] w-full max-w-[360px] min-h-[300px] lg:mx-0"
        />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">Lead Pastor</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl">
            Pastor Claudine Bukasa
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Guiding the church into its next chapter, with a nurse’s heart for people and a pastor’s call to carry hope
            forward.
          </p>
          <p className="mt-4 text-base leading-7 text-muted">
            A new chapter. The same hope. A continuing mission. We honour the foundation laid by founder and visionary
            Rev. Jean Paul Bukasa, and we keep going.
          </p>
          <Button href="/about/leadership" className="mt-8" variant="navy">
            Meet the pastor
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function DeclarationBand() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <Container className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">Sunday declaration</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-navy sm:text-5xl">
          I Arise and Shine
        </h2>
        <div className="mt-8 space-y-3">
          {declarationPreview.map((line) => (
            <p key={line} className="text-lg leading-8 text-navy/80">
              {line}
            </p>
          ))}
        </div>
        <Button href="/about/declaration" className="mt-8" variant="outlineNavy">
          Read the full declaration
        </Button>
      </Container>
    </section>
  );
}

export function PlanVisitBand() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Plan your visit"
            title="Sunday is simpler than you think"
            description="Sunday Praise & Worship, 10:00–12:00. Friday Evening Gathering, 18:00–19:00. Wednesday Online Prayer, 20:30–21:30. Everyone is welcome."
          />
          <p className="mt-5 text-sm font-medium text-navy">{site.address.display}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.maps.directions} variant="navy">
              Get Directions
            </Button>
            <Button href="/im-new" variant="ghost">
              What to Expect →
            </Button>
          </div>
        </div>
        <div className="overflow-hidden border border-navy/10">
          <iframe
            title="Map to Hope of Nations Church"
            src={site.maps.embed}
            className="h-72 w-full"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
}
