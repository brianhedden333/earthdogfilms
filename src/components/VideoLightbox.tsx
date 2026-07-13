
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  vimeoId?: string;
  youtubeId?: string;
  title: string;
  vertical?: boolean;
}

const VideoLightbox = ({ isOpen, onClose, vimeoId, youtubeId, title, vertical = false }: VideoLightboxProps) => {
  const getEmbedUrl = () => {
    if (vimeoId) {
      // Handle private/unlisted videos with hash (format: "videoId/hash")
      if (vimeoId.includes('/')) {
        const [id, hash] = vimeoId.split('/');
        return `https://player.vimeo.com/video/${id}?h=${hash}&autoplay=1`;
      }
      return `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
    }
    if (youtubeId) {
      return `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
    }
    return "";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${vertical ? "max-w-sm" : "max-w-4xl"} w-full p-0 bg-black border-none`}>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 z-50 p-2 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className={vertical ? "aspect-[9/16] w-full" : "aspect-video w-full"}>
            <iframe
              src={getEmbedUrl()}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              title={title}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoLightbox;
