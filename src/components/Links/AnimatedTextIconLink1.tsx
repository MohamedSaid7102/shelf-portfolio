import React from 'react';

interface AnimatedTextIconLink1Props {
  text: string;
  icon: React.ReactNode;
  link: string;
}

export const AnimatedTextIconLink1: React.FC<AnimatedTextIconLink1Props> = ({
  text,
  icon,
  link,
}) => {
  return (
    <div
      role="link"
      className="button button--rotate-over view"
      aria-label="Demo"
    >
      <span aria-hidden={true}></span>
      <span aria-hidden={true}></span>
      <span aria-hidden={true}></span>
      <span aria-hidden={true}></span>
      <a
        href={link}
        target="_blank"
        className="flex p-5 justify-center items-center gap-6 text-[14px] sm:text-[23px]"
        tabIndex={0}
      >
        {text}
        {icon}
      </a>
    </div>
  );
};
