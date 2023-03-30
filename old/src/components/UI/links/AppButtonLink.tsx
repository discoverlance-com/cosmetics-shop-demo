'use client';

import Link from 'next/link';
import { forwardRef } from 'react';

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    'href'
  > {
  to: string;
  variant?: 'default' | 'blue';
}

const AppButtonLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { children, to, className, ...rest } = props;
  return (
    <Link
      href={to}
      className={`px-4 py-2 rounded  shadow shadow-white/50 transition-all duration-300 hover:translate-y-1 hover:rounded-none focus:ring-4 focus:ring-blue-200 outline-none focus:outline-none  ${
        className ?? ''
      }  ${
        !props.variant || props.variant === 'default'
          ? `bg-white text-gray-700`
          : 'bg-blue-700 text-gray-100'
      }`}
      {...rest}
      ref={ref}
    >
      {children}
    </Link>
  );
});

AppButtonLink.displayName = 'AppButtonLink';
export default AppButtonLink;
