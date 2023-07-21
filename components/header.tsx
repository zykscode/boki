'use client';

import { motion } from 'framer-motion';
import { useSelectedLayoutSegment } from 'next/dist/client/components/navigation';
import Link from 'next/link';
import React from 'react';
import {BsWhatsapp} from 'react-icons/bs'

import { mainNav } from '#/config/home';
import { cn } from '#/lib/utils';

import { ModeToggle } from './mode-toggle';
import { buttonVariants } from './ui/button';
import { MainNav } from './ui/main-nav';

const buttonVariant = {
  hover: {
    x: -20,
    opacity: 0,
    display: 'none',
  },
  tap: {
    scale: 0.9,
  },
};

const iconVariants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  hover: {
    opacity: 1,
    x: 0,
  },
  tap: {
    scale: 0.9,
  },
};

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
            <ModeToggle />
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'px-4',
              )}
            >
              Login
            </Link>
          </nav>
        ) : null}
        <nav className=" md:hidden">
          <motion.button
            whileTap="tap"
            whileHover="hover"
            variants={buttonVariant}
          >
            <Link
              href="/login" // Update the "to" prop with the correct route
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'px-4',
              )}
            >
              <motion.span
                variants={iconVariants}
                initial="initial"
                animate="hover"
                exit="initial"
              >
                <BsWhatsapp />
              </motion.span>
              <motion.span
                variants={iconVariants}
                initial="hover"
                animate="initial"
                exit="hover"
              >
                Chat with Victor
              </motion.span>
            </Link>
          </motion.button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
