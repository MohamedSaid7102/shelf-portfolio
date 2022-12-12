import React from 'react';

interface AvatarProps {
  imgPath: string;
  imgAlt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ imgAlt, imgPath }) => {
  return (
    <picture className="block w-[200px] h-[200px] overflow-hidden rounded-full shadow-xl shadow-cyan-500/50">
      <img
        src={imgPath}
        alt={imgAlt}
        className="w-full h-full object-cover text-sm"
      />
    </picture>
  );
};
