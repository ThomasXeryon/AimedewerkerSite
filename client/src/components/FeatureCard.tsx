import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureCardProps {
  icon: "tasks" | "chat" | "email";
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = () => {
    switch (icon) {
      case "tasks":
        return (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
      case "chat":
        return (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        );
      case "email":
        return (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        );
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)" }}
      className="bg-slate-800/50 border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:bg-slate-800/70"
    >
      <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-6">
        {getIcon()}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
}
