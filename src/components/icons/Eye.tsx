import React from 'react';

interface EyeProps {
  className?: string;
  width?: number;
  height?: number;
}

// q- what is the type of ...props

export const Eye: React.FC<EyeProps> = ({
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
      <path
        d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
      <circle
        cx="128"
        cy="128"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></circle>
    </svg>
  );
};
