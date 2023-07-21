'use client';

import { useTheme } from 'next-themes';
import { IoMoonSharp, IoSunnyOutline } from 'react-icons/io5';

export function ModeToggle({ size = 14 }: { size?: number }) {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="z-50 flex h-8 w-8 items-center justify-center  rounded-full "
    >
      <span className="sr-only">Toggle mode</span>

      <IoSunnyOutline
        className="rotate-0 scale-0 transition-all duration-500 dark:-rotate-90 dark:scale-150"
        size={size}
      />
      <IoMoonSharp
        className="absolute rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0"
        size={size}
      />
    </button>
  );
}
