import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import VideoLightbox from "@/components/VideoLightbox";
import { Project, SubVideo } from "@/data/site";

interface ProjectPlayerProps {
  // The project being played, or null when nothing is open.
  project: Project | null;
  onClose: () => void;
}

// Plays a project's video in the lightbox. A project that is a series (e.g. Gonzales for Senate)
// first shows a picker with each video; closing a video returns to the picker.
const ProjectPlayer = ({ project, onClose }: ProjectPlayerProps) => {
  const [picked, setPicked] = useState<SubVideo | null>(null);
  const series = project?.subVideos;

  return (
    <>
      <Dialog open={!!series && !picked} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-h-[92vh] w-[calc(100%-32px)] max-w-[860px] gap-0 overflow-y-auto rounded-lg border-0 bg-paper p-6 font-sans leading-[normal] text-ink sm:rounded-lg sm:p-10">
          {project && series && (
            <>
              <div className="text-[13px] uppercase tracking-[0.12em] text-brand-text">
                {project.category} · {project.format}
              </div>
              <DialogTitle className="mt-3 pr-8 font-display text-[clamp(36px,5vw,56px)] font-normal leading-none tracking-normal">
                {project.title}
              </DialogTitle>
              <DialogDescription className="mt-4 max-w-[560px] text-base leading-[1.55] text-ink-3">
                {project.description}
              </DialogDescription>

              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
                {series.map((video) => (
                  <button
                    key={video.vimeoId}
                    type="button"
                    onClick={() => setPicked(video)}
                    aria-label={`Play ${video.title}`}
                    className="group block text-left"
                  >
                    <span className="relative block overflow-hidden rounded-md bg-[#E4E2DB]">
                      <img
                        src={video.thumbnail}
                        alt=""
                        className="block aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                        <svg width="16" height="16" viewBox="0 0 14 14" fill="#DC2626" aria-hidden="true">
                          <path d="M3 1l10 6-10 6z" />
                        </svg>
                      </span>
                    </span>
                    {video.duration && <span className="mt-3 block text-[13px] text-ink-4">{video.duration}</span>}
                  </button>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <VideoLightbox
        isOpen={!!project && (!series || !!picked)}
        onClose={() => (series ? setPicked(null) : onClose())}
        vimeoId={picked?.vimeoId ?? project?.vimeoId}
        youtubeId={picked ? undefined : project?.youtubeId}
        title={picked?.title ?? project?.title ?? ""}
        vertical={!!picked}
      />
    </>
  );
};

export default ProjectPlayer;
