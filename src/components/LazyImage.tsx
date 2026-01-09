import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const LazyImage = ({ src, alt, className = '', width, height }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      loading="lazy"
      width={width}
      height={height}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      style={hasError ? { display: 'none' } : undefined}
    />
  );
};

export default LazyImage;
