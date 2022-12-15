import React, { ReactNode } from 'react';

interface TextIconBtnProps {
  text: string;
  icon: ReactNode;
  onClickAction: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
}

export const TextIconBtn: React.FC<TextIconBtnProps> = ({
  text,
  icon,
  onClickAction,
  ariaLabel,
}) => {
  return (
    <button
      className="outline-btn-type-1 w-full py-5 gap-3"
      aria-label={ariaLabel ? ariaLabel : text}
      onClick={onClickAction}
    >
      <span className="pointer-events-none">{text}</span>
      {icon}
    </button>
  );
};
