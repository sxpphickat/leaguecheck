'use client';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import LightModeIcon from './LightModeIcon';
import DarkModeIcon from './DarkModeIcon';

export default function DarkModeToggle() {
  const [ isDark, setIsDark ] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    const rootElement = document.documentElement;

    rootElement.classList.toggle('dark');

  }, [isDark]);

  return (
    <button className='text-black dark:text-white fill-current p-1 text-3xl rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700'
         onClick={handleClick}
    >
      {
        isDark
        ? <DarkModeIcon />
        : <LightModeIcon />
      }
      
    </button>
  )
}