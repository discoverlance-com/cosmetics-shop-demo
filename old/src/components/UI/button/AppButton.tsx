'use client';

import { forwardRef } from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'default' | 'blue';
}

const AppButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={`px-4 py-2 rounded shadow shadow-white/50 transition-all duration-300 hover:translate-y-1 hover:rounded-none focus:ring-4 focus:ring-blue-200 outline-none focus:outline-none ${
        className ?? ''
      } ${
        !props.variant || props.variant === 'default'
          ? `bg-white text-gray-700`
          : 'bg-blue-700 text-gray-100'
      }`}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});

AppButton.displayName = 'AppButton';
export default AppButton;
