import { lazyLoadingImagesData } from '@data/data';
import React, { useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface AvatarProps {
  imgSrc: string;
  imgAlt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ imgAlt, imgSrc }) => {
  //@ts-ignore: Get the corresponding hash from lazyLoadingImagesData to show it
  const correspondingHash = lazyLoadingImagesData[imgSrc].blurhash;

  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    setLoadStarted(true);
  };
  return (
    <picture className="relative block w-[200px] h-[200px] overflow-hidden rounded-full shadow-xl shadow-cyan-500/50">
      {!isLoaded && isLoadStarted && (
        <Blurhash
          hash={correspondingHash}
          width={200}
          height={200}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="z-20 absolute inset-0 w-full h-full"
        />
      )}
      <LazyLoadImage
        src={imgSrc}
        alt={imgAlt}
        className="z-10 w-full h-full object-cover text-sm"
        loading="lazy"
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
      />
    </picture>
  );
};
