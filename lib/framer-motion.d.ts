// Type definitions for framer-motion
declare module 'framer-motion' {
  import * as React from 'react';

  export interface AnimationProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
  }

  export interface MotionProps extends AnimationProps, React.HTMLAttributes<HTMLElement> {}

  export const motion: {
    div: React.FC<MotionProps>;
    section: React.FC<MotionProps>;
    span: React.FC<MotionProps>;
    p: React.FC<MotionProps>;
    h1: React.FC<MotionProps>;
    h2: React.FC<MotionProps>;
    h3: React.FC<MotionProps>;
    h4: React.FC<MotionProps>;
    h5: React.FC<MotionProps>;
    h6: React.FC<MotionProps>;
    ul: React.FC<MotionProps>;
    li: React.FC<MotionProps>;
    button: React.FC<MotionProps>;
    a: React.FC<MotionProps>;
    header: React.FC<MotionProps>;
    footer: React.FC<MotionProps>;
    nav: React.FC<MotionProps>;
    main: React.FC<MotionProps>;
    aside: React.FC<MotionProps>;
    article: React.FC<MotionProps>;
    [key: string]: React.FC<MotionProps>;
  };
  
  export const AnimatePresence: React.FC<{
    children?: React.ReactNode;
    exitBeforeEnter?: boolean;
    initial?: boolean;
    onExitComplete?: () => void;
  }>;
}