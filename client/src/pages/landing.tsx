import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import ParallaxSection from "@/components/ParallaxSection";
import ProcessShowcase from "@/components/ProcessShowcase";

export default function Landing() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar 
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />
      
      <main>
        <HeroSection onRegisterClick={() => setShowRegister(true)} />
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful Features for Modern Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI Coworker transforms your daily workflow with intelligent automation and insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon="tasks"
                title="Smart Task Automation"
                description="Automatically handle repetitive tasks, schedule meetings, and manage your calendar with intelligent AI assistance."
              />
              
              <FeatureCard 
                icon="chat"
                title="Meeting Summarization"
                description="Get instant, actionable summaries of your meetings with key decisions, action items, and follow-ups clearly outlined."
              />
              
              <FeatureCard 
                icon="email"
                title="Email Intelligence"
                description="Smart email drafting, priority sorting, and automated follow-ups to keep your communications efficient and professional."
              />
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Stop Drowning in <span className="gradient-text">Administrative Tasks</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professionals spend 41% of their time on discretionary activities that offer little personal satisfaction and could be handled by others. It's time to focus on what truly matters.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-300">Reclaim 20+ hours per week from routine tasks</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-300">Focus on strategic work that drives results</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-300">Reduce stress and improve work-life balance</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl p-8 backdrop-blur-sm border border-red-400/30 max-w-md mx-auto">
                  <div className="text-center">
                    <div className="text-6xl mb-4">😰</div>
                    <p className="text-red-300 font-semibold">Overwhelmed Professional</p>
                    <p className="text-sm text-gray-400 mt-2">Drowning in repetitive tasks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Every Industry</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">From legal to sales to customer support, AI Coworker adapts to your industry's unique needs.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Legal Professionals</h3>
                <p className="text-gray-300">Automate document review, case summarization, and client communication to focus on legal strategy.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sales Teams</h3>
                <p className="text-gray-300">Streamline lead qualification, proposal generation, and follow-up sequences to close more deals.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Customer Support</h3>
                <p className="text-gray-300">Enhance response times with intelligent ticket routing and automated resolution suggestions.</p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <PricingSection onRegisterClick={() => setShowRegister(true)} />
      </main>

      <Footer />

      {showLogin && (
        <LoginForm
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <RegisterForm
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </div>
  );
}
