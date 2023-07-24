import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

import { cn } from '#/lib/utils';

import styles from './PageSocial.module.css';
import { buttonVariants } from './ui/button';

const buttonVariant = {
  hover: {
    opacity: 1,
    background: 'radial-gradient(circle at center, green 0%, green 100%)',
    backgroundSize: '300%',
    transition: {
      backgroundSize: { duration: 0.3 },
    },
  },
  tap: {
    scale: 0.9,
  },
  initial: {
    backgroundSize: '0%',
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

const textVariants = {
  initial: {
    opacity: 1,
    x: 20,
  },
  hover: {
    opacity: 0,
  },
  tap: {
    scale: 0.9,
  },
};

const Chat = () => {
  return (
    <motion.button whileTap="tap" whileHover="hover" variants={buttonVariant}>
      <Link
        href="/login" // Update the "to" prop with the correct route
        className={cn(
          buttonVariants({ variant: 'secondary', size: 'sm' }),
          'px-4',
        )}
      >
        <div className={styles.actionBg}>
          <div className={styles.actionBgPane} />
        </div>

        <motion.span variants={iconVariants}>
          <BsWhatsapp />
        </motion.span>
        <motion.span variants={textVariants}>Chat with Victor</motion.span>
      </Link>
    </motion.button>
  );
};

export default Chat;
