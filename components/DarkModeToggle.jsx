'use client';
import { useEffect, useState } from 'react';
import LightModeIcon from './LightModeIcon';
import DarkModeIcon from './DarkModeIcon';

export default function DarkModeToggle() {
  const [ isDark, setIsDark ] = useState(false);

  const handleClick = () => {
    if (isDark) {
      localStorage.theme = 'light';
      setIsDark(!isDark);
    } else {
      localStorage.theme = 'dark';
      setIsDark(!isDark);
    }
  }
  
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false);
    }
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