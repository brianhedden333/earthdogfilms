import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import VideoLightbox from "@/components/VideoLightbox";

const LatestProjects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isVertical, setIsVertical] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{
    vimeoId?: string;
    youtubeId?: string;
    title: string;
  } | null>(null);
  const [subOverlayOpen, setSubOverlayOpen] = useState(false);
  const [subOverlayProject, setSubOverlayProject] = useState<{
    title: string;
    description: string;
    subVideos: { vimeoId: string; title: string; duration?: string; customThumbnail?: string }[];
  } | null>(null);

  const projects = [
    {
      title: "Gonzales for Senate",
      description: "A sample of short, vertical, documentary-style promotional videos intended for organic social media impact.",
      vimeoId: "1205342921",
      customThumbnail: "/lovable-uploads/gonzales-thumb.jpg",
      subVideos: [
        { vimeoId: "1209622639", title: "Gonzales for Senate - Vol. 3", duration: "0:34", customThumbnail: "/lovable-uploads/gonzales-sub3-thumb.jpg" },
        { vimeoId: "1205342921", title: "Gonzales for Senate - Vol. 1", duration: "0:49", customThumbnail: "/lovable-uploads/gonzales-sub1-thumb.jpg" },
        { vimeoId: "1203265891", title: "Gonzales for Senate - Vol. 2", duration: "0:30", customThumbnail: "/lovable-uploads/gonzales-sub2-thumb.jpg" },
      ]
    },
    {
      title: "Seligman for AG Commercial",
      description: "A 30-second advertisement for the David Seligman for Attorney General campaign in the 2026 Colorado Democratic Primary election.",
      vimeoId: "1202700031",
      customThumbnail: "/lovable-uploads/seligman-thumb.jpg",
      duration: "0:30"
    },
    {
      title: "Awaken School",
      description: "A short promotional video for the Spiritual and Successful workshop hosted by Rachael Jayne Groover and the Awaken School in Loveland, Colorado.",
      vimeoId: "1125623603",
      customThumbnail: "/lovable-uploads/awaken-school-thumb.jpg",
      duration: "1:45"
    }
  ];

  const getVideoThumbnail = (vimeoId?: string, youtubeId?: string, customThumbnail?: string) => {
    if (customThumbnail) {
      return customThumbnail;
    }
    if (vimeoId) {
      const baseId = vimeoId.split('/')[0];
      return `https://vumbnail.com/${baseId}.jpg`;
    }
    if (youtubeId) {
      return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
    }
    return "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=450";
  };

  const handleVideoClick = (project: { title: string; vimeoId?: string; youtubeId?: string; description?: string; subVideos?: { vimeoId: string; title: string; duration?: string; customThumbnail?: string }[] }) => {
    if (project.subVideos) {
      setSubOverlayProject({ title: project.title, description: project.description || "", subVideos: project.subVideos });
      setSubOverlayOpen(true);
      return;
    }
    setIsVertical(false);
    setSelectedVideo({
      vimeoId: project.vimeoId,
      youtubeId: project.youtubeId,
      title: project.title
    });
    setLightboxOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Our Latest Projects</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Recent work showcasing our commitment to authentic storytelling
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
              <div onClick={() => handleVideoClick(project)}>
                <div className="relative">
                  <img
                    src={getVideoThumbnail(project.vimeoId, project.youtubeId, project.customThumbnail)}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width={400}
                    height={192}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-sans text-stone-900 mb-3">{project.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{project.description}</p>
                  {project.duration && <p className="text-sm text-stone-400 mt-2">Run time: {project.duration}</p>}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/portfolio"
            onClick={scrollToTop}
            className="text-red-600 hover:text-red-700 hover:underline text-sm font-medium"
          >
            View our full portfolio
          </Link>
        </div>
      </div>

      {subOverlayOpen && subOverlayProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 transition-opacity duration-300"
          onClick={() => setSubOverlayOpen(false)}
        >
          <div className="max-w-3xl w-full mx-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-2xl font-bold text-white">{subOverlayProject.title}</h2>
                <p className="text-stone-400 text-sm mt-1">{subOverlayProject.description}</p>
              </div>
              <button
                onClick={() => setSubOverlayOpen(false)}
                className="text-white text-3xl leading-none ml-6 hover:text-stone-300"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {subOverlayProject.subVideos.map((video, i) => (
                <div
                  key={i}
                  className="cursor-pointer group"
                  onClick={() => {
                    setSubOverlayOpen(false);
                    setIsVertical(true);
                    setSelectedVideo({ vimeoId: video.vimeoId, title: video.title });
                    setLightboxOpen(true);
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={video.customThumbnail || `https://vumbnail.com/${video.vimeoId}.jpg`}
                      alt={video.title}
                      className="w-full aspect-[9/16] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  {video.duration && (
                    <p className="text-stone-400 text-xs mt-2">Run time: {video.duration}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <VideoLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        vimeoId={selectedVideo?.vimeoId}
        youtubeId={selectedVideo?.youtubeId}
        title={selectedVideo?.title || ""}
        vertical={isVertical}
      />
    </section>
  );
};

export default LatestProjects;
