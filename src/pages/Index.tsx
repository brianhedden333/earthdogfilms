import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "@/styles/home-scroll.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Picture from "@/components/Picture";
import ProjectCard from "@/components/ProjectCard";
import ServiceRow from "@/components/ServiceRow";
import LogoGrid from "@/components/LogoGrid";
import Testimonial from "@/components/Testimonial";
import VideoLightbox from "@/components/VideoLightbox";
import { site, latestProjects, processSteps, testimonials, Project } from "@/data/site";

const sections = [
  { id: "s-top", label: "Top" },
  { id: "s-about", label: "About" },
  { id: "s-work", label: "Latest projects" },
  { id: "s-reel", label: "Reel" },
  { id: "s-services", label: "Our process" },
  { id: "s-clients", label: "Clients" },
  { id: "s-quotes", label: "Testimonials" },
  { id: "s-contact", label: "Contact" },
];

// Reveal stagger for repeated items, as in the mockup.
const stagger = ["rv rv-2", "rv rv-3", "rv rv-4", "rv rv-4"];

const eyebrow = "text-[13px] uppercase tracking-[0.12em]";
const textLink =
  "border-b border-ink pb-0.5 text-[15px] transition-colors hover:border-brand-text hover:text-brand-text";

const PlayIcon = ({ size, fill }: { size: number; fill: string }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill={fill} aria-hidden="true">
    <path d="M3 1l10 6-10 6z" />
  </svg>
);

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Earth Dog Films?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Earth Dog Films is an award-winning video production company based in Boulder, Colorado, specializing in documentary marketing, brand films, and cinematic storytelling for mission-driven organizations, nonprofits, and changemakers across Colorado and nationally."
      }
    },
    {
      "@type": "Question",
      "name": "What types of video does Earth Dog Films produce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Earth Dog Films produces documentary marketing videos, commercial brand films, political campaign ads, feature documentaries, promotional videos, music videos, aerial drone footage, and short-form social media content."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Earth Dog Films located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Earth Dog Films is based in Boulder, Colorado, and serves clients throughout the Denver metro area, statewide across Colorado, and nationally."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Earth Dog Films different from other video production companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Earth Dog Films takes a story-first approach, combining documentary depth with commercial polish. We specialize in working with purpose-driven brands, nonprofits, educators, and political campaigns to create emotionally resonant content that connects with audiences and drives real-world impact."
      }
    },
    {
      "@type": "Question",
      "name": "How do I hire Earth Dog Films for a video project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reach Earth Dog Films through the contact form at earthdogfilms.com/contact to discuss your project vision, timeline, and budget. We work with clients across Colorado and throughout the United States."
      }
    }
  ]
};

// Muted, looping Vimeo background video. The poster sits on top and fades out once playback starts.
const HeroVideo = () => {
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Wait for the page to finish loading so the player doesn't compete with first paint.
    const start = () => setMounted(true);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://player.vimeo.com") return;
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data.event === "ready") {
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ method: "addEventListener", value: "play" }),
            "https://player.vimeo.com",
          );
        }
        if (data.event === "play") setPlaying(true);
      } catch {
        // Ignore messages that aren't player events.
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="hero-out absolute inset-0 bg-ink [container-type:size]">
      {mounted && (
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${site.heroVimeoId}?autoplay=1&loop=1&muted=1&background=1&controls=0`}
          title="Earth Dog Films background video"
          allow="autoplay; fullscreen"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
          style={{ width: "max(100cqw, 177.78cqh)", height: "max(100cqh, 56.25cqw)" }}
        />
      )}
      <picture>
        <source srcSet="/lovable-uploads/hero-poster.webp" type="image/webp" />
        <img
          src="/lovable-uploads/hero-poster.png"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{ opacity: playing ? 0 : 1 }}
        />
      </picture>
    </div>
  );
};

const Index = () => {
  const [reelOpen, setReelOpen] = useState(false);
  const [playing, setPlaying] = useState<Project | null>(null);

  // The .snap container is the scroller on this route, not <body>.
  useEffect(() => {
    document.documentElement.classList.add("home-snap");
    return () => document.documentElement.classList.remove("home-snap");
  }, []);

  // Arriving from an inner page with a hash (e.g. /#s-services): jump straight to that section.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
  }, []);

  // Firefox has no CSS scroll-driven animations yet. Drive the reveals, progress bar and
  // active dot from scroll position there instead (styles are at the end of home-scroll.css).
  const snapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const snap = snapRef.current;
    if (!snap || CSS.supports("animation-timeline: view()")) return;
    snap.classList.add("no-sda");

    const secs = Array.from(snap.querySelectorAll<HTMLElement>(".sec"));
    const dots = Array.from(snap.querySelectorAll<HTMLElement>(".dots a"));
    const bar = snap.querySelector<HTMLElement>(".progress");

    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { root: snap, rootMargin: "0px 0px -20% 0px" },
    );
    // The current section is the one crossing the middle of the viewport.
    const current = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => dots[secs.indexOf(e.target as HTMLElement)]?.classList.toggle("on", e.isIntersecting)),
      { root: snap, rootMargin: "-50% 0px -50% 0px" },
    );
    secs.forEach((sec) => {
      reveal.observe(sec);
      current.observe(sec);
    });

    const onScroll = () => {
      const max = snap.scrollHeight - snap.clientHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? snap.scrollTop / max : 0})`;
    };
    snap.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      reveal.disconnect();
      current.disconnect();
      snap.removeEventListener("scroll", onScroll);
    };
  }, []);

  const { featured } = testimonials;
  const [quoteBefore, quoteAfter] = featured.text.split(featured.emphasis);

  return (
    <div ref={snapRef} className="snap w-full bg-paper font-sans leading-[normal] text-ink">
      <SEO
        title="Earth Dog Films - Cinematic Storytelling for Brands and Movements"
        description="Earth Dog Films creates powerful, emotionally resonant video content for mission-driven brands, educators, and changemakers in Boulder, Colorado. Award-winning documentary and brand film production."
        canonical="/"
        structuredData={faqStructuredData}
      />
      <Header variant="home" />

      <nav className="dots" aria-label="Page sections">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} aria-label={s.label}>
            <span />
          </a>
        ))}
      </nav>

      <main>
        <section id="s-top" className="sec flex flex-col gap-7 px-[6vw] pb-8 pt-[112px] max-[760px]:pt-[140px]">
          <h1 className="m-0 font-display text-[clamp(48px,6.6vw,104px)] font-normal leading-[0.98] tracking-[-0.02em]">
            <span className="line">
              <span className="ld ld-1">Cinematic storytelling for brands</span>
            </span>
            <span className="line">
              <span className="ld ld-2">
                <em className="text-brand">and movements.</em>
              </span>
            </span>
          </h1>
          <div className="ld-img relative min-h-0 flex-auto overflow-hidden rounded-md max-[760px]:aspect-[4/3] max-[760px]:flex-none">
            <HeroVideo />
            <button
              type="button"
              onClick={() => setReelOpen(true)}
              className="absolute bottom-4 left-4 inline-flex min-h-[44px] items-center gap-3 rounded-full bg-paper py-3 pl-3.5 pr-6 text-[15px] font-medium text-ink transition-colors hover:text-brand-text min-[761px]:bottom-7 min-[761px]:left-7"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand">
                <PlayIcon size={12} fill="#FFFFFF" />
              </span>
              Watch our reel
            </button>
          </div>
          <div className={`ld-fade flex items-center justify-between gap-4 text-ink-4 ${eyebrow}`}>
            <span>Award-winning · Boulder, Colorado</span>
            <span className="inline-flex items-center gap-3 max-[760px]:hidden">
              Scroll
              <span className="relative inline-block h-7 w-px overflow-hidden bg-line-2">
                <span className="cue absolute inset-0 block bg-ink" />
              </span>
            </span>
          </div>
        </section>

        <section
          id="s-about"
          className="sec flex flex-col justify-center px-[6vw] pb-20 pt-[120px] max-[760px]:py-[72px]"
        >
          <div className={`rv rv-1 mb-8 text-brand-text ${eyebrow}`}>Who we are</div>
          <p className="rv rv-2 m-0 max-w-[1180px] font-display text-[clamp(34px,3.5vw,56px)] leading-[1.18]">
            Earth Dog Films is an award-winning production company helping mission-driven brands, educators and
            changemakers connect with their audiences through powerful, emotionally resonant video.
          </p>
          <p className="rv rv-3 m-0 mt-9 max-w-[620px] text-xl leading-[1.55] text-ink-3">
            From campaign films to founder stories, we bring your message to life with{" "}
            <em className="text-brand-text">depth, clarity and heart.</em>
          </p>
          <Link to="/about" className={`rv rv-4 mt-9 self-start ${textLink}`}>
            More about the studio
          </Link>
        </section>

        <section
          id="s-work"
          className="sec flex flex-col justify-center px-[6vw] pb-14 pt-[104px] max-[760px]:py-[72px]"
        >
          <div className="rv rv-1 mb-9 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="m-0 font-display text-[clamp(44px,12vw,60px)] font-normal leading-[1.2]">Latest projects</h2>
            <Link to="/portfolio" className={textLink}>
              View the full portfolio
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-9">
            {latestProjects.map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                variant="home"
                className={stagger[i]}
                imageWrapClassName="rv-img"
                onPlay={setPlaying}
              />
            ))}
          </div>
        </section>

        <section
          id="s-reel"
          className="sec flex items-center bg-ink px-[6vw] pb-14 pt-[104px] text-paper max-[760px]:py-[72px]"
        >
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-center gap-14">
            <div>
              <div className={`rv rv-1 mb-5 text-brand-on-dark ${eyebrow}`}>Brand reel · {site.reel.duration}</div>
              <h2 className="rv rv-2 m-0 font-display text-[clamp(48px,5vw,80px)] font-normal leading-none">
                Our story in motion.
              </h2>
              <p className="rv rv-3 m-0 mt-6 max-w-[400px] text-lg leading-[1.6] text-ink-dim">
                Documentary, campaign and brand work in just over a minute.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setReelOpen(true)}
              aria-label="Play the Earth Dog Films brand reel"
              className="rv-img group relative block w-full overflow-hidden rounded-md min-[761px]:col-span-2"
            >
              <Picture
                image={site.reel.image}
                alt="Earth Dog Films reel title frame"
                sizes="(max-width: 760px) 88vw, 60vw"
                className="aspect-video w-full object-cover"
              />
              <span className="absolute left-1/2 top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper transition-transform duration-300 group-hover:scale-110">
                <PlayIcon size={24} fill="#1A1917" />
              </span>
            </button>
          </div>
        </section>

        <section
          id="s-services"
          className="sec flex items-center px-[6vw] pb-14 pt-[104px] max-[760px]:py-[72px]"
        >
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-16 max-[760px]:gap-10">
            <div>
              <div className={`rv rv-1 mb-5 text-brand-text ${eyebrow}`}>Our process</div>
              <h2 className="rv rv-2 m-0 font-display text-[clamp(44px,12vw,60px)] font-normal leading-[1.02]">
                From concept to completion.
              </h2>
            </div>
            <div className="flex flex-col min-[761px]:col-span-2">
              {processSteps.map((s, i) => (
                <ServiceRow key={s.num} {...s} className={stagger[i]} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="s-clients"
          className="sec flex flex-col justify-center bg-paper-2 px-[6vw] pb-14 pt-[104px] max-[760px]:py-[72px]"
        >
          <h2 className="rv rv-1 m-0 mb-12 text-center font-display text-[clamp(36px,3.4vw,52px)] font-normal leading-[1.2]">
            Trusted by organizations that make a difference
          </h2>
          <LogoGrid
            cellClassName="h-[100px] min-[761px]:h-[130px]"
            cellClass={(i) => (i < 6 ? "rv rv-2" : "rv rv-3")}
          />
        </section>

        <section
          id="s-quotes"
          className="sec flex flex-col justify-center px-[6vw] pb-14 pt-[104px] max-[760px]:py-[72px]"
        >
          <figure className="rv rv-1 m-0 mx-auto max-w-[1080px] text-center">
            <blockquote className="m-0 font-display text-[clamp(30px,3.2vw,48px)] leading-[1.2]">
              “{quoteBefore}
              <em className="text-brand">{featured.emphasis}</em>
              {quoteAfter}”
            </blockquote>
            <figcaption className="mt-[22px] text-[15px] text-ink-3">{featured.who}</figcaption>
          </figure>
          <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-8 max-[760px]:mt-10">
            {testimonials.cards.map((q, i) => (
              <Testimonial key={q.who} {...q} className={i === 0 ? "rv rv-2" : "rv rv-3"} />
            ))}
          </div>
        </section>

        <section id="s-contact" className="sec flex flex-col bg-ink px-[6vw] pt-[104px] text-paper max-[760px]:pt-[72px]">
          <div className="flex flex-auto flex-col items-center justify-center text-center max-[760px]:pb-[72px]">
            <img src={site.logo} alt="" width={84} height={84} className="rv rv-1 h-[84px] w-[84px] object-contain" />
            <h2 className="rv rv-2 m-0 mt-6 font-display text-[clamp(56px,7vw,112px)] font-normal leading-none">
              Ready to tell your story?
            </h2>
            <p className="rv rv-3 m-0 mt-6 text-[19px] text-ink-dim">Let’s create something meaningful together.</p>
            <div className="rv rv-4 mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex min-h-[44px] items-center rounded-full bg-brand px-8 py-4 text-base font-medium text-white transition-colors hover:bg-brand-text"
              >
                Let’s tell your story
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex min-h-[44px] items-center rounded-full border border-[#5A5853] px-8 py-4 text-base text-paper transition-colors hover:border-paper"
              >
                Watch our work
              </Link>
            </div>
          </div>
          <Footer variant="dark" />
        </section>
      </main>

      <VideoLightbox
        isOpen={reelOpen}
        onClose={() => setReelOpen(false)}
        vimeoId={site.reel.vimeoId}
        title="Earth Dog Films brand reel"
      />
      <VideoLightbox
        isOpen={playing !== null}
        onClose={() => setPlaying(null)}
        vimeoId={playing?.vimeoId}
        youtubeId={playing?.youtubeId}
        title={playing?.title ?? ""}
        vertical={!!playing?.subVideos}
      />
    </div>
  );
};

export default Index;
