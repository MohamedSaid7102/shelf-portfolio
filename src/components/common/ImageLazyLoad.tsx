import useOnScreenIntersect from '@hooks/useOnScreenIntersect';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Blurhash } from 'react-blurhash';

interface IImageLazyLoad {
  src: string;
  alt: string;
  blurHash: string;
}

export const ImageLazyLoad: React.FC<IImageLazyLoad> = ({
  src,
  alt,
  blurHash,
}) => {
  const imgRef = useRef<HTMLPictureElement>(null);
  const isImageVisibleOnScreen = useOnScreenIntersect(imgRef);

  const placeholder = useMemo(() => {
    if (!blurHash) return <></>;
    return (
      <Blurhash
        hash={blurHash || ''}
        width={'100%'}
        height={'100%'}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
    );
  }, [blurHash]);

  return (
    <picture
      ref={imgRef}
      className="relative flex justify-center items-center w-full h-full"
    >
      {placeholder}
      {isImageVisibleOnScreen && (
        <img
          src={src}
          /** I put aria-label insted of alt because alt would make text appear over the Blurhash and we don't want that */
          aria-label={alt}
          loading="lazy"
          className={`object-cover h-full w-full absolute inset-0`}
        />
      )}
    </picture>
  );
};
