import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface PricingSectionProps {
  onRegisterClick: () => void;
}

export default function PricingSection({ onRegisterClick }: PricingSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out AI Coworker",
      features: [
        "Up to 10 tasks per month",
        "Basic email automation",
        "Community support"
      ],
      buttonText: "Get Started Free",
      buttonStyle: "border-2 border-gray-600 text-white hover:bg-gray-800"
    },
    {
      name: "Pro",
      price: "$29",
      description: "For busy professionals",
      features: [
        "Unlimited tasks",
        "Advanced AI automation",
        "Meeting transcription",
        "Priority support"
      ],
      buttonText: "Start Pro Trial",
      buttonStyle: "gradient-bg text-white hover:scale-105",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "border-2 border-gray-600 text-white hover:bg-gray-800"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the plan that fits your needs. All plans include our core AI automation features.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-slate-800/50 border rounded-2xl p-8 relative transition-all duration-300 hover:border-purple-500/50 ${
                plan.popular 
                  ? "border-2 border-purple-500 transform scale-105" 
                  : "border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mb-8">{plan.description}</p>
                
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  onClick={plan.buttonText === "Start Pro Trial" ? onRegisterClick : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
