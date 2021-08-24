import React, { PropsWithChildren } from "react";

export interface SocialLinkProps {
  href: string;
  title: string;
  viewbox?: string;
}

export const SocialLink: React.FC<PropsWithChildren<SocialLinkProps>> = ({
  href,
  title,
  viewbox,
  children,
}) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='text-gray-400 hover:text-gray-500'>
      <span className='sr-only'>{title}</span>
      <svg
        className='h-6 w-6'
        fill='currentColor'
        viewBox={viewbox ? viewbox : "0 0 24 24"}
        aria-hidden='true'>
        {children}
      </svg>
    </a>
  );
};
