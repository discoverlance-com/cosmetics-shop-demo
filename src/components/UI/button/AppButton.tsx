'use client';

import { forwardRef } from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const AppButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={`bg-white px-4 py-2 rounded text-gray-700 shadow shadow-white/50 transition-all duration-300 hover:translate-y-1 hover:rounded-none focus:ring-4 focus:ring-blue-200 outline-none focus:outline-none ${
        className ?? ''
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
