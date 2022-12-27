import { lazyLoadingImagesData } from '@data/data';
import { getProductionNameOfPath } from '@utils/functions';
import React, { useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface AvatarProps {
  imgSrc: string;
  imgAlt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ imgAlt, imgSrc }) => {
  /** imgSrc in production might be like e.g: /assets/project-1-e5c0642e.png,
   * below logic is to remove the produced version of the img name, to be able to correctly compare ti to images in lazyLoadingImagesData
   */
  let inProductionMode = imgSrc.includes('-');

  // imgSrc = inProductionMode ? getProductionNameOfPath(imgSrc) : imgSrc;

  let correspondingHash = inProductionMode
    ? /*@ts-ignore: Get the corresponding hash from lazyLoadingImagesData to show it*/
      lazyLoadingImagesData[getProductionNameOfPath(imgSrc)].blurhash
    : /*@ts-ignore: Get the corresponding hash from lazyLoadingImagesData to show it*/
      lazyLoadingImagesData[imgSrc].blurhash;

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
