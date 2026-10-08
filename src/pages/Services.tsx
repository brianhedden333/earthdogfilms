import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import { services } from "@/data/site";

const eyebrow = "text-[13px] uppercase tracking-[0.12em]";

const Services = () => {
  const { hash } = useLocation();

  // Deep links such as /services#post-production (also used by the old service URLs).
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <div className="w-full bg-paper font-sans leading-[normal] text-ink">
      <SEO
        title="Video Production Services - Boulder, Colorado"
        description="Full-service video production in Boulder, Colorado. Documentary production, commercial and brand films, post-production, and aerial drone cinematography for mission-driven organizations."
        canonical="/services"
      />
      <Header />
      <Breadcrumbs />

      <main>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-end gap-10 px-[6vw] pb-14 pt-16 min-[761px]:pt-[104px]">
          <h1 className="m-0 font-display text-[clamp(64px,8vw,128px)] font-normal leading-[0.95] tracking-[-0.02em]">
            <span className="load-line">
              <span className="load-up">Services</span>
            </span>
          </h1>
          <p className="load-fade m-0 max-w-[520px] text-xl leading-[1.55] text-ink-3">
            We offer full-service video production grounded in story, strategy, and emotional clarity.
          </p>
        </section>

        <nav
          aria-label="Services on this page"
          className="load-fade mx-[6vw] flex flex-wrap gap-2.5 border-t border-line pb-4 pt-6 [--load-delay:0.55s]"
        >
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex min-h-[44px] items-center rounded-full border border-[#CFCDC5] px-5 py-2.5 text-[15px] text-ink transition-colors hover:border-ink"
            >
              {s.title}
            </a>
          ))}
        </nav>

        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-6 px-[6vw] py-[88px] min-[761px]:py-[120px] ${i % 2 === 1 ? "bg-paper-2" : ""}`}
          >
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-12 min-[761px]:gap-16">
              <Reveal>
                <div className={`mb-5 text-brand-text ${eyebrow}`}>{s.num}</div>
                <h2 className="m-0 font-display text-[clamp(44px,4.6vw,68px)] font-normal leading-[1.02]">{s.title}</h2>
              </Reveal>

              <div className="min-[761px]:col-span-2">
                <Reveal delay={120}>
                  <p className="m-0 max-w-[820px] font-display text-[clamp(28px,2.6vw,38px)] leading-[1.25]">{s.desc}</p>
                </Reveal>

                <div className="mt-12">
                  {s.includes.map((item, j) => (
                    <Reveal
                      key={item.title}
                      delay={j * 90}
                      className="grid grid-cols-1 items-baseline gap-x-6 gap-y-2 border-t border-line-2 py-6 min-[761px]:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]"
                    >
                      <h3 className="m-0 font-display text-[28px] font-normal leading-[1.15]">{item.title}</h3>
                      <p className="m-0 text-base leading-[1.6] text-ink-3">{item.desc}</p>
                    </Reveal>
                  ))}
                </div>

                {s.work && (
                  <Reveal>
                    <Link
                      to={`/portfolio?category=${encodeURIComponent(s.work.category)}`}
                      className="mt-8 inline-flex min-h-[44px] items-center border-b border-ink text-[15px] transition-colors hover:border-brand-text hover:text-brand-text"
                    >
                      {s.work.label} →
                    </Link>
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        ))}

        <Reveal>
          <CTABand
            layout="center"
            title="Ready to tell your story?"
            cta="Start a project"
            secondary={{ label: "Watch our work", to: "/portfolio" }}
          />
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
