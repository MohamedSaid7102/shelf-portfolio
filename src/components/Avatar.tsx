import React from 'react';
import { lazyLoadingImagesData } from '@data/data';
import { getProductionNameOfPath } from '@utils/functions';
import { ImageLazyLoad } from '@components/';
interface AvatarProps {
  imgSrc: string;
  imgAlt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ imgAlt, imgSrc }) => {
  /** imgSrc in production might be like e.g: /assets/project-1-e5c0642e.png,
   * below logic is to remove the production version of the img name, to be able to correctly compare it to images in lazyLoadingImagesData
   */
  let inProductionMode = imgSrc.includes('-');

  let correspondingHash = inProductionMode
    ? /*@ts-ignore: Get the corresponding hash from lazyLoadingImagesData to show it*/
      lazyLoadingImagesData[getProductionNameOfPath(imgSrc)].blurhash
    : /*@ts-ignore: Get the corresponding hash from lazyLoadingImagesData to show it*/
      lazyLoadingImagesData[imgSrc].blurhash;

  return (
    <picture className="relative block w-[200px] h-[200px] overflow-hidden rounded-full shadow-xl shadow-cyan-500/50">
      <ImageLazyLoad src={imgSrc} alt={imgAlt} blurHash={correspondingHash} />
    </picture>
  );
};
