import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  offset?: any;
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className = "",
  offset = ["start end", "end start"]
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}