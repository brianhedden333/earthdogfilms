import { cn } from "@/lib/utils";

interface PictureProps {
  // Base name under /img: expects <image>-800.webp, <image>-1600.webp and <image>-1600.jpg.
  image?: string;
  // Used when there is no optimised set (e.g. a remote video thumbnail).
  fallbackSrc?: string;
  alt: string;
  sizes?: string;
  className?: string;
  eager?: boolean;
}

const Picture = ({ image, fallbackSrc, alt, sizes = "100vw", className, eager = false }: PictureProps) => {
  const loading = eager ? "eager" : "lazy";
  if (!image) {
    return <img src={fallbackSrc} alt={alt} loading={loading} decoding="async" className={cn("block", className)} />;
  }
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`/img/${image}-800.webp 800w, /img/${image}-1600.webp 1600w`}
        sizes={sizes}
      />
      <img
        src={`/img/${image}-1600.jpg`}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn("block", className)}
      />
    </picture>
  );
};

export default Picture;
