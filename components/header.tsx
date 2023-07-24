'use client';

import { useSelectedLayoutSegment } from 'next/dist/client/components/navigation';
import Link from 'next/link';
import React from 'react';

import { mainNav } from '#/config/home';
import { cn } from '#/lib/utils';

import Chat from './chat';
import { ModeToggle } from './mode-toggle';
import { MainNav } from './ui/main-nav';

const Header = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <header className="container sticky top-0 z-40 bg-background/70 backdrop-blur-sm">
      <div className="flex h-20 items-center justify-between py-6">
        <MainNav items={mainNav.mainNav} />
        {mainNav.mainNav?.length ? (
          <nav className="hidden gap-6 md:flex">
            {mainNav.mainNav?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? '#' : item.href}
                className={cn(
                  'flex items-center capitalize font-semibold border-0 border-colours-blue hover:border-b-2 transition-colors hover:text-foreground/80 text-3xl sm:text-sm',
                  item.href.startsWith(`/${segment}`)
                    ? 'text-foreground'
                    : 'text-foreground/80',
                  item.disabled && 'cursor-not-allowed opacity-80',
                )}
              >
                {item.title}
              </Link>
            ))}

            <Chat />

            <ModeToggle />
          </nav>
        ) : null}
        <nav className=" md:hidden">
          <Chat />
        </nav>
      </div>
    </header>
  );
};

export default Header;
