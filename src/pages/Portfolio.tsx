import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import ProjectPlayer from "@/components/ProjectPlayer";
import { categories, projects, Category, Project } from "@/data/site";
import { portfolioStructuredData } from "@/data/portfolioStructuredData";

type Filter = "All" | Category;

const filters: Filter[] = ["All", ...categories];
const countFor = (f: Filter) => (f === "All" ? projects.length : projects.filter((p) => p.category === f).length);

const Portfolio = () => {
  // /portfolio?category=Documentary opens with that filter selected (used by the Services page).
  const [params] = useSearchParams();
  const requested = params.get("category") as Filter | null;
  const [filter, setFilter] = useState<Filter>(requested && filters.includes(requested) ? requested : "All");
  const [playing, setPlaying] = useState<Project | null>(null);

  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <div className="w-full bg-paper font-sans leading-[normal] text-ink">
      <SEO
        title="Video Production Portfolio - Documentary & Brand Films"
        description="Explore Earth Dog Films' portfolio of documentary marketing, commercial brand films, political campaign videos, and feature documentaries. Award-winning video production in Boulder and Denver, Colorado for mission-driven organizations."
        canonical="/portfolio"
        structuredData={portfolioStructuredData}
      />
      <Header />
      <Breadcrumbs />

      <main>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-end gap-10 px-[6vw] pb-14 pt-16 min-[761px]:pt-[104px]">
          <h1 className="m-0 font-display text-[clamp(64px,8vw,128px)] font-normal leading-[0.95] tracking-[-0.02em]">
            <span className="load-line">
              <span className="load-up">Portfolio</span>
            </span>
          </h1>
          <p className="load-fade m-0 max-w-[520px] text-xl leading-[1.55] text-ink-3">
            Campaign films, brand stories and documentaries for organizations doing work that matters.
          </p>
        </section>

        <section className="px-[6vw] pb-[96px] min-[761px]:pb-[140px]">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="load-fade flex flex-wrap gap-2.5 border-t border-line pb-12 pt-6 [--load-delay:0.55s]"
          >
            {filters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "min-h-[44px] rounded-full border px-5 py-2.5 text-[15px] transition-colors",
                    active
                      ? "border-ink bg-ink text-paper"
                      : "border-[#CFCDC5] bg-transparent text-ink hover:border-ink",
                  )}
                >
                  {f} <span className="ml-1 opacity-60">{countFor(f)}</span>
                </button>
              );
            })}
          </div>

          {/* Keyed by filter so the grid replays its reveal when the category changes. */}
          <div key={filter} className="grid grid-cols-[repeat(auto-fit,minmax(min(400px,100%),1fr))] gap-x-10 gap-y-16">
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 120}>
                <ProjectCard project={p} onPlay={setPlaying} imageWrapClassName="reveal-img" />
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <CTABand title="Have a story to tell?" cta="Let’s talk" />
        </Reveal>
      </main>

      <Footer />

      <ProjectPlayer project={playing} onClose={() => setPlaying(null)} />
    </div>
  );
};

export default Portfolio;
