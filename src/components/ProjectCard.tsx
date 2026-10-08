import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Project, projectMeta, projectThumbnail } from "@/data/site";
import Picture from "@/components/Picture";

interface ProjectCardProps {
  project: Project;
  // "home" is the compact 4:3 card in Latest projects; "portfolio" is the 16:9 grid card.
  variant?: "home" | "portfolio";
  className?: string;
  // Wraps the image so pages can attach their reveal animation.
  imageWrapClassName?: string;
  // Clicking the card plays the video.
  onPlay: (project: Project) => void;
}

const ProjectCard = ({ project, variant = "portfolio", className, imageWrapClassName, onPlay }: ProjectCardProps) => {
  const home = variant === "home";
  const src = projectThumbnail(project);

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => onPlay(project)}
        aria-label={`Play ${project.title}`}
        className="group block w-full text-left text-ink transition-colors hover:text-brand-text"
      >
        <div className={cn("overflow-hidden rounded-md", imageWrapClassName)}>
          {project.image || src ? (
            <Picture
              image={project.image}
              fallbackSrc={src}
              alt={project.alt}
              sizes={home ? "(max-width: 760px) 88vw, 30vw" : "(max-width: 960px) 88vw, 44vw"}
              className={cn(
                "w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
                home ? "aspect-[4/3]" : "aspect-video",
              )}
            />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center bg-[#E4E2DB] text-[13px] tracking-[0.06em] text-ink-4">
              [ FILM STILL ]
            </div>
          )}
        </div>
        <div className={cn("flex items-baseline justify-between gap-4", home ? "mt-[18px]" : "mt-[22px]")}>
          <div className={cn("font-display", home ? "text-[30px] leading-[1.1]" : "text-[36px] leading-[1.05]")}>
            {project.title}
          </div>
          <div className="whitespace-nowrap text-[13px] text-ink-4">{projectMeta(project)}</div>
        </div>
        <div
          className={cn(
            "text-ink-3",
            home ? "mt-2 text-[15px] leading-[1.5]" : "mt-2.5 max-w-[560px] text-base leading-[1.55]",
          )}
        >
          {home ? project.homeDescription ?? project.description : project.description}
        </div>
      </button>

      {(!home || project.hasPage) && (
        <div className={cn("flex items-center gap-4 text-xs uppercase tracking-[0.12em]", home ? "mt-2" : "mt-3.5")}>
          {!home && <span className="text-brand-text">{project.category}</span>}
          {project.hasPage && (
            <Link
              to={`/portfolio/${project.slug}`}
              aria-label={`${project.title} case study`}
              className="border-b border-ink/40 pb-px text-ink transition-colors hover:border-brand-text hover:text-brand-text"
            >
              Case study →
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
