
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  isActive?: boolean;
}

const processSteps: ProcessStep[] = [
  {
    id: 'intake',
    title: 'Task Intake',
    description: 'AI automatically captures and categorizes incoming work requests from emails, meetings, and documents.'
  },
  {
    id: 'analysis',
    title: 'Smart Analysis',
    description: 'Advanced AI analyzes context, priority, and requirements to determine the optimal automation approach.'
  },
  {
    id: 'execution',
    title: 'Automated Execution',
    description: 'AI handles routine tasks like scheduling, document creation, and follow-up communications.',
    isActive: true
  },
  {
    id: 'optimization',
    title: 'Continuous Learning',
    description: 'System learns from your preferences and feedback to improve automation accuracy over time.'
  }
];

export default function ProcessShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  // Custom scroll progress for slower scrolling effect
  const scrollProgress = useMotionValue(0);
  const smoothScrollProgress = useSpring(scrollProgress, { 
    stiffness: 50, 
    damping: 30,
    restDelta: 0.001
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Transform values with different speeds for parallax
  const titleY = useTransform(smoothScrollProgress, [0, 1], [100, -100]);
  const leftY = useTransform(smoothScrollProgress, [0, 1], [0, -400]);
  const rightY = useTransform(smoothScrollProgress, [0, 1], [0, 200]);
  const cardRotateY = useTransform(smoothScrollProgress, [0, 0.5, 1], [15, 0, -15]);
  const cardScale = useTransform(smoothScrollProgress, [0, 0.3, 0.7, 1], [0.8, 1.05, 1.05, 0.8]);
  const backgroundY = useTransform(smoothScrollProgress, [0, 1], [0, -200]);

  // Smooth transforms
  const smoothTitleY = useSpring(titleY, { stiffness: 100, damping: 30 });
  const smoothLeftY = useSpring(leftY, { stiffness: 80, damping: 25 });
  const smoothRightY = useSpring(rightY, { stiffness: 80, damping: 25 });
  const smoothCardRotateY = useSpring(cardRotateY, { stiffness: 60, damping: 20 });
  const smoothCardScale = useSpring(cardScale, { stiffness: 60, damping: 20 });

  useEffect(() => {
    let rafId: number;
    let lastScrollY = 0;
    let targetScrollProgress = 0;
    
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Check if element is in view
      const inView = rect.top < windowHeight && rect.bottom > 0;
      setIsInView(inView);
      
      if (inView) {
        // Calculate scroll progress with slower movement
        const scrollStart = rect.top - windowHeight;
        const scrollEnd = rect.bottom;
        const scrollRange = scrollEnd - scrollStart;
        const currentScroll = -scrollStart;
        
        // Apply easing for slower scroll effect
        targetScrollProgress = Math.max(0, Math.min(1, currentScroll / scrollRange));
        
        // Step calculation
        const stepIndex = Math.floor(targetScrollProgress * processSteps.length);
        setActiveStep(Math.max(0, Math.min(stepIndex, processSteps.length - 1)));
      }
    };

    const updateScrollProgress = () => {
      const current = scrollProgress.get();
      const diff = targetScrollProgress - current;
      
      if (Math.abs(diff) > 0.001) {
        scrollProgress.set(current + diff * 0.1); // Slower interpolation
        rafId = requestAnimationFrame(updateScrollProgress);
      }
    };

    const onScroll = () => {
      handleScroll();
      updateScrollProgress();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [scrollProgress]);

  return (
    <section ref={containerRef} className="relative py-40 bg-slate-900 overflow-hidden" style={{ height: '200vh' }}>
      {/* Parallax background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
      />
      
      {/* Floating background elements */}
      <motion.div
        style={{ y: useTransform(smoothScrollProgress, [0, 1], [200, -400]) }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(smoothScrollProgress, [0, 1], [-100, 300]) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Process steps */}
            <motion.div style={{ y: smoothLeftY }} className="space-y-8">
              <motion.div 
                style={{ y: smoothTitleY }}
                className="text-center lg:text-left mb-12"
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  How AI Coworker <span className="gradient-text">Transforms</span> Your Workflow
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Watch how intelligent automation takes over your repetitive tasks, freeing you to focus on strategic work.
                </p>
              </motion.div>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`p-8 rounded-3xl border transition-all duration-700 ${
                      index === activeStep
                        ? 'bg-slate-800/90 border-purple-500/60 shadow-2xl shadow-purple-500/20 backdrop-blur-sm'
                        : 'bg-slate-800/40 border-gray-700/50 hover:border-gray-600/50 backdrop-blur-sm'
                    }`}
                    animate={{
                      scale: index === activeStep ? 1.05 : 1,
                      x: index === activeStep ? 20 : 0,
                      opacity: index === activeStep ? 1 : 0.7,
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                  >
                    <div className="flex items-start space-x-6">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                          index === activeStep ? 'gradient-bg shadow-lg' : 'bg-gray-700'
                        }`}
                        animate={{
                          rotateY: index === activeStep ? [0, 360] : 0,
                        }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${
                          index === activeStep ? 'text-white' : 'text-gray-300'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`leading-relaxed text-lg transition-colors duration-500 ${
                          index === activeStep ? 'text-gray-300' : 'text-gray-400'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Interactive card */}
            <motion.div 
              style={{ y: smoothRightY }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                style={{ 
                  rotateY: smoothCardRotateY,
                  scale: smoothCardScale,
                }}
                className="relative w-full max-w-lg"
              >
                {/* Main card */}
                <div className="bg-gradient-to-br from-slate-800/90 to-gray-800/80 rounded-3xl p-10 shadow-2xl backdrop-blur-sm border border-gray-700/50">
                  <div className="text-center mb-8">
                    <motion.div 
                      className="w-20 h-20 gradient-bg rounded-3xl flex items-center justify-center mx-auto mb-6"
                      animate={{
                        rotateZ: activeStep * 90,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        rotateZ: { duration: 0.8, ease: "easeInOut" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-3">AI Processing</h3>
                    <p className="text-gray-300 text-lg">Step {activeStep + 1} of {processSteps.length}</p>
                  </div>

                  {/* Progress indicators */}
                  <div className="space-y-4 mb-8">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <motion.div 
                          className={`w-4 h-4 rounded-full ${
                            i <= activeStep ? 'gradient-bg' : 'bg-gray-600'
                          }`}
                          animate={{
                            scale: i === activeStep ? [1, 1.3, 1] : 1,
                          }}
                          transition={{ duration: 1, repeat: i === activeStep ? Infinity : 0 }}
                        />
                        <div className={`h-3 flex-1 rounded-full overflow-hidden ${
                          i <= activeStep ? 'bg-gray-600' : 'bg-gray-700'
                        }`}>
                          {i <= activeStep && (
                            <motion.div
                              className="h-full gradient-bg"
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 1.5, delay: i * 0.3 }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="text-center">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-green-400 font-semibold text-xl"
                    >
                      {processSteps[activeStep]?.title}
                    </motion.div>
                  </div>
                </div>

                {/* Enhanced floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full backdrop-blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4],
                    x: [0, 10, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full backdrop-blur-sm"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, -15, 0],
                    y: [0, 10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-1/2 -right-4 w-16 h-16 bg-green-500/20 rounded-full backdrop-blur-sm"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0.9, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
