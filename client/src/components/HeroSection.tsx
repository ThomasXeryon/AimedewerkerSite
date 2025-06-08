import { motion } from "framer-motion";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Your <span className="gradient-text">AI Coworker</span> for Maximum Productivity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Automate tasks, summarize meetings, and follow up on emails. AI Coworker helps professionals work smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={onRegisterClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:justify-self-end"
          >
            <div className="relative">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-gray-700">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                    <div className="h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-gray-700 rounded-lg"></div>
                    <div className="h-6 bg-gray-700 rounded-lg w-3/4"></div>
                    <div className="h-6 bg-gray-700 rounded-lg w-1/2"></div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
