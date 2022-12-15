import React from 'react';

interface DownloadFileProps {
  className?: string;
  width?: number;
  height?: number;
}

export const DownloadFile: React.FC<DownloadFileProps> = ({
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
      <path
        d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
      <polyline
        points="152 32 152 88 208 88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>
      <polyline
        points="100 156 128 184 156 156"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>
      <line
        x1="128"
        y1="120"
        x2="128"
        y2="184"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
    </svg>
  );
};
