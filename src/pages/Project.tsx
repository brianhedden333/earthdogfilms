import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import Picture from "@/components/Picture";
import VideoLightbox from "@/components/VideoLightbox";
import { getProject, projectPages, projectThumbnail, videoEmbedUrl, SubVideo } from "@/data/site";

// Unfilled copy shows as a [bracketed] placeholder while developing and is left out of the live site.
const placeholder = (value: string | undefined, label: string) => value ?? (import.meta.env.DEV ? label : undefined);

const eyebrow = "text-[13px] uppercase tracking-[0.12em]";

const Project = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  const [playing, setPlaying] = useState(false);
  const [subVideo, setSubVideo] = useState<SubVideo | null>(null);

  useEffect(() => setPlaying(false), [slug]);

  if (!project || !project.hasPage) return <Navigate to="/portfolio" replace />;

  const { detail } = project;
  const embed = videoEmbedUrl(project);
  const poster = projectThumbnail(project);
  const next = projectPages[(projectPages.indexOf(project) + 1) % projectPages.length];

  const facts = [
    { k: "Client", v: placeholder(detail?.client, "[Client]") },
    { k: "Year", v: placeholder(detail?.year, "[Year]") },
    { k: "Format", v: project.format },
    { k: "Run time", v: project.duration },
    { k: "Role", v: placeholder(detail?.role, "[Direction, production, edit]") },
  ].filter((f) => f.v);

  const writeUp = [
    { h: "The brief", v: placeholder(detail?.brief, "[What the client needed — audience, message and constraints.]") },
    { h: "Our approach", v: placeholder(detail?.approach, "[How you shaped the story, the shoot and the edit.]") },
    {
      h: "Where it ran",
      v: placeholder(detail?.whereItRan, "[Broadcast, streaming and social placements, plus any results you can share.]"),
    },
  ].filter((s) => s.v);

  const stills = detail?.stills ?? [];
  const stillPlaceholders = import.meta.env.DEV && stills.length === 0 ? ["[ STILL 01 ]", "[ STILL 02 ]", "[ BEHIND THE SCENES ]"] : [];

  return (
    <div key={project.slug} className="w-full bg-paper font-sans leading-[normal] text-ink">
      <SEO title={project.title} description={project.description} canonical={`/portfolio/${project.slug}`} />
      <Header />
      <Breadcrumbs />

      <main>
        <section className="px-[6vw] pb-12 pt-10 min-[761px]:pt-16">
          <Link
            to="/portfolio"
            className="inline-flex min-h-[44px] items-center text-[15px] text-ink-3 transition-colors hover:text-brand-text"
          >
            ← All projects
          </Link>
          <div className={`load-fade mt-8 text-brand-text [--load-delay:0s] ${eyebrow}`}>
            {detail?.eyebrow ?? `${project.category} · ${project.format}`}
          </div>
          <h1 className="m-0 mt-4 font-display text-[clamp(56px,7.4vw,120px)] font-normal leading-[0.95] tracking-[-0.02em]"><span className="load-line"><span className="load-up">
            {project.title}
          </span></span></h1>
        </section>

        <section className="px-[6vw] pb-[72px] min-[761px]:pb-24">
          <Reveal delay={350}>
          <div className="reveal-img relative aspect-video overflow-hidden rounded-md bg-ink">
            {playing && embed ? (
              <iframe
                src={embed}
                title={project.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${project.title}`}
                className="group absolute inset-0 block h-full w-full"
              >
                <Picture
                  image={project.image}
                  fallbackSrc={poster}
                  alt={project.alt}
                  sizes="88vw"
                  eager
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper transition-transform duration-300 group-hover:scale-110 min-[761px]:h-24 min-[761px]:w-24">
                  <svg width="26" height="26" viewBox="0 0 14 14" fill="#DC2626" aria-hidden="true">
                    <path d="M3 1l10 6-10 6z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
          </Reveal>
        </section>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-start gap-16 px-[6vw] pb-[88px] min-[761px]:pb-[120px]">
          <Reveal>
          <dl className="m-0 grid grid-cols-1">
            {facts.map((f) => (
              <div key={f.k} className="flex justify-between gap-4 border-t border-line py-4">
                <dt className="text-sm text-ink-4">{f.k}</dt>
                <dd className="m-0 text-right text-[15px]">{f.v}</dd>
              </div>
            ))}
          </dl>
          </Reveal>
          <Reveal delay={150} className="max-w-[760px] min-[761px]:col-span-2">
            <p className="m-0 font-display text-[clamp(28px,2.6vw,38px)] leading-[1.25]">{project.description}</p>
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-[44px] items-center rounded-full bg-ink px-7 py-3 text-[15px] font-medium text-paper transition-colors hover:bg-brand"
              >
                Watch the full film →
              </a>
            )}
            {writeUp.map((s, i) => (
              <div key={s.h}>
                <h2 className={`m-0 mb-3 font-medium text-brand-text ${eyebrow} ${i === 0 ? "mt-12" : "mt-10"}`}>
                  {s.h}
                </h2>
                <p className="m-0 text-lg leading-[1.7] text-ink-2">{s.v}</p>
              </div>
            ))}
          </Reveal>
        </section>

        {project.subVideos && (
          <section className="px-[6vw] pb-[88px] min-[761px]:pb-[120px]">
            <Reveal>
              <h2 className="m-0 mb-8 font-display text-[44px] font-normal leading-[1.2]">The series</h2>
            </Reveal>
            <Reveal delay={120} className="grid max-w-[900px] grid-cols-3 gap-3 min-[761px]:gap-5">
              {project.subVideos.map((v) => (
                <button
                  key={v.vimeoId}
                  type="button"
                  onClick={() => setSubVideo(v)}
                  aria-label={`Play ${v.title}`}
                  className="group block text-left"
                >
                  <span className="relative block overflow-hidden rounded-md">
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      loading="lazy"
                      decoding="async"
                      className="block aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper min-[761px]:h-16 min-[761px]:w-16">
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="#DC2626" aria-hidden="true">
                        <path d="M3 1l10 6-10 6z" />
                      </svg>
                    </span>
                  </span>
                  {v.duration && <span className="mt-3 block text-[13px] text-ink-4">{v.duration}</span>}
                </button>
              ))}
            </Reveal>
          </section>
        )}

        {(stills.length > 0 || stillPlaceholders.length > 0) && (
          <section className="px-[6vw] pb-[88px] min-[761px]:pb-[120px]">
            <Reveal>
              <h2 className="m-0 mb-8 font-display text-[44px] font-normal leading-[1.2]">Stills</h2>
            </Reveal>
            <Reveal delay={120} className="grid grid-cols-1 gap-5 min-[761px]:grid-cols-3">
              {stills.map((s) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[4/3] w-full rounded-md object-cover"
                />
              ))}
              {stillPlaceholders.map((label) => (
                <div
                  key={label}
                  className="flex aspect-[4/3] items-center justify-center rounded-md bg-[#E4E2DB] text-xs tracking-[0.06em] text-ink-4"
                >
                  {label}
                </div>
              ))}
            </Reveal>
          </section>
        )}

        <section className="border-t border-line px-[6vw] py-[72px] min-[761px]:py-24">
          <Reveal>
          <div className={`mb-6 text-ink-4 ${eyebrow}`}>Next project</div>
          <Link
            to={`/portfolio/${next.slug}`}
            className="group grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-10 transition-colors hover:text-brand-text"
          >
            <div className="font-display text-[clamp(48px,6vw,92px)] leading-none">{next.title}{" "}→</div>
            <div className="reveal-img overflow-hidden rounded-md">
              <Picture
                image={next.image}
                fallbackSrc={projectThumbnail(next)}
                alt={next.alt}
                sizes="(max-width: 760px) 88vw, 44vw"
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
          </Reveal>
        </section>
      </main>

      <Footer border />

      <VideoLightbox
        isOpen={subVideo !== null}
        onClose={() => setSubVideo(null)}
        vimeoId={subVideo?.vimeoId}
        title={subVideo?.title ?? ""}
        vertical
      />
    </div>
  );
};

export default Project;
