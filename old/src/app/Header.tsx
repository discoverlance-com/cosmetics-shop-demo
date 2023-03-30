'use client';

import { useRef } from 'react';
import { useInterval } from 'usehooks-ts';

const Header = () => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const title = 'Cosmetics';

  useInterval(() => {
    if (titleRef.current) {
      const target = titleRef.current;
      if (target.innerText.length < title.length) {
        target.innerText = title.substring(0, target.innerText.length + 1);
      } else {
        target.innerText = '';
      }
    }
  }, 300);

  return (
    <header className="flex items-center justify-center bg-hero-image bg-no-repeat bg-cover w-full h-[500px] relative rounded">
      <div className="absolute inset-0 bg-opacity-10 bg-blue-50"></div>
      <h1 className="font-bold text-center">
        <span className="text-5xl">Welcome to</span>
        <span className="tracking-wider block text-7xl pt-2 uppercase">
          My <span ref={titleRef}>{title}</span>
        </span>
      </h1>
    </header>
  );
};

export default Header;
