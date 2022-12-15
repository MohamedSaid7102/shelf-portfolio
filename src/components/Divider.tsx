import React from 'react';

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={`w-full h-[1px] bg-white my-5 ${className}`}></div>;
};
