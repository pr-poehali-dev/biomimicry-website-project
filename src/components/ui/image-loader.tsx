import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    // Сбросить состояние при изменении src
    setIsLoading(true);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div className="image-container" style={{ width, height }}>
      {isLoading && (
        <Skeleton 
          className="w-full h-full absolute top-0 left-0 rounded-lg"
        />
      )}
      
      {error ? (
        <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground p-4 rounded-lg">
          Изображение не найдено
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${className} ${isLoading ? 'opacity-0' : 'opacity-100 animate-fade-in'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ImageLoader;
