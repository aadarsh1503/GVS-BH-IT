import clsx from 'clsx';
import * as React from 'react';
import { SiTwitter } from 'react-icons/si';

import ButtonLink, { ButtonLinkProps } from '@/components/links/ButtonLink';

type ShareTweetButtonProps = {
  url: string;
  title: string;
} & Omit<ButtonLinkProps, 'children' | 'href'>;

export default function ShareTweetButton({
  url,
  title,
  className,
  ...rest
}: ShareTweetButtonProps) {
  const text = `I just read an article about ${title} by @axstudioss.`;
  const intentUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(text)}%0A%0A`;

  return (
    <ButtonLink
      {...rest}
      href={intentUrl}
      className={clsx(
        'items-center gap-2 border-[#1da1f2] bg-[#1da1f2] hover:bg-[#1da1f290] active:bg-[#1da1f295]',
        className
      )}
    >
      <SiTwitter className='text-[1.2em]' />
      Tweet this article
    </ButtonLink>
  );
}
