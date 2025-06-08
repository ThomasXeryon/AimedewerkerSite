import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
}

export default function ScrollAnimationWrapper({ children }: ScrollAnimationWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform values for different scroll speeds
  const y1 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, -300]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.05, 1.1]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.4]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Background layers with parallax */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        style={{ y: y1, scale }}
      />
      
      <motion.div 
        className="fixed inset-0 opacity-20"
        style={{ y: y2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "2s" }} />
      </motion.div>

      {/* Content wrapper */}
      <motion.div 
        className="relative z-10"
        style={{ opacity: isScrolling ? 0.95 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}