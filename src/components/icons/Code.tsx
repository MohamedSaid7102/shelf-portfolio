import React from 'react';

interface CodeProps {
  className?: string;
  width?: number;
  height?: number;
}

// q- what is the type of ...props

export const Code: React.FC<CodeProps> = ({
  className,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden={true}
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '30'}`}
      height={`${height ? height : '30'}`}
      className={`${className} pointer-events-none link__icon`}
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <rect width="256" height="256" fill="none"></rect>
      <polyline
        points="64 88 16 128 64 168"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>
      <polyline
        points="192 88 240 128 192 168"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>
      <line
        x1="160"
        y1="40"
        x2="96"
        y2="216"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
    </svg>
  );
};
