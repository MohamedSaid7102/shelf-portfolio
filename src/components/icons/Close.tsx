import React from 'react';

interface CloseProps {
  className?: string;
  width?: number;
  height?: number;
}

// q- what is the type of ...props

export const Close: React.FC<CloseProps> = ({
  className,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden={true}
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ? width : '45'}`}
      height={`${height ? height : '45'}`}
      className={`${className} pointer-events-none`}
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <rect width="256" height="256" fill="none"></rect>
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="16"
      ></circle>
      <line
        x1="160"
        y1="96"
        x2="96"
        y2="160"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="160"
        y1="160"
        x2="96"
        y2="96"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
    </svg>
  );
};
