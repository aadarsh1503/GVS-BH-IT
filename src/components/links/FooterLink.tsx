import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

const FooterLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center',
          'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          'font-medium',
          'text-base transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80',
          'hover:scale-105 hover:transform focus:scale-105 focus:transform',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default FooterLink;
