import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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
  const [activeStep, setActiveStep] = useState(2);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const cardRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -5, 5]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const smoothLeftY = useSpring(leftY, { stiffness: 100, damping: 30 });
  const smoothRightY = useSpring(rightY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const stepIndex = Math.floor(progress * processSteps.length);
      setActiveStep(Math.max(0, Math.min(stepIndex, processSteps.length - 1)));
    });

    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="py-32 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Process steps */}
          <motion.div style={{ y: smoothLeftY }} className="space-y-8">
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How AI Coworker <span className="gradient-text">Transforms</span> Your Workflow
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                Watch how intelligent automation takes over your repetitive tasks, freeing you to focus on strategic work.
              </p>
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`p-6 rounded-2xl border transition-all duration-500 ${
                    index === activeStep
                      ? 'bg-slate-800/80 border-purple-500/50 shadow-lg shadow-purple-500/20'
                      : 'bg-slate-800/40 border-gray-700 hover:border-gray-600'
                  }`}
                  animate={{
                    scale: index === activeStep ? 1.02 : 1,
                    x: index === activeStep ? 10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      index === activeStep ? 'gradient-bg' : 'bg-gray-700'
                    }`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${
                        index === activeStep ? 'text-white' : 'text-gray-300'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`leading-relaxed ${
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
                rotateY: cardRotateY,
                scale: cardScale,
              }}
              className="relative w-full max-w-md"
            >
              {/* Main card */}
              <div className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-gray-700">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Processing</h3>
                  <p className="text-gray-300">Step {activeStep + 1} of {processSteps.length}</p>
                </div>

                {/* Progress indicators */}
                <div className="space-y-3 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        i <= activeStep + 1 ? 'gradient-bg' : 'bg-gray-600'
                      }`} />
                      <div className={`h-2 flex-1 rounded-full overflow-hidden ${
                        i <= activeStep + 1 ? 'bg-gray-600' : 'bg-gray-700'
                      }`}>
                        {i <= activeStep + 1 && (
                          <motion.div
                            className="h-full gradient-bg"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: i * 0.2 }}
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 font-semibold"
                  >
                    {processSteps[activeStep]?.title}
                  </motion.div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}