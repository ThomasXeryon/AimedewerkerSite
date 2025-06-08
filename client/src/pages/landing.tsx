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
    <ScrollAnimationWrapper>
      <div className="min-h-screen text-white">
        <Navbar 
          onLoginClick={() => setShowLogin(true)}
          onRegisterClick={() => setShowRegister(true)}
        />
        
        <main>
          <ParallaxSection speed={0.3}>
            <HeroSection onRegisterClick={() => setShowRegister(true)} />
          </ParallaxSection>
          
          <ParallaxSection speed={0.4}>
            <section id="features" className="py-20 bg-slate-800/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Powerful Features for Modern Professionals
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Transform your workflow with AI-powered automation that handles routine tasks, 
                    so you can focus on what matters most.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <FeatureCard 
                    icon="tasks" 
                    title="Task Automation" 
                    description="Automatically handle routine tasks like scheduling, email management, and document processing." 
                    delay={0}
                  />
                  <FeatureCard 
                    icon="chat" 
                    title="Intelligent Communication" 
                    description="AI-powered chat and email responses that maintain your professional tone and style." 
                    delay={0.2}
                  />
                  <FeatureCard 
                    icon="email" 
                    title="Document Processing" 
                    description="Extract insights, summarize content, and generate reports from any document format." 
                    delay={0.4}
                  />
                </div>
              </div>
            </section>
          </ParallaxSection>

          <ParallaxSection speed={0.6}>
            <section className="py-20 bg-slate-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                      Stop Drowning in <span className="gradient-text">Busy Work</span>
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Email Overload</h3>
                          <p className="text-gray-300">Spending hours daily on routine email responses and scheduling</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Document Chaos</h3>
                          <p className="text-gray-300">Manually reviewing contracts, proposals, and reports takes forever</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Time Waste</h3>
                          <p className="text-gray-300">Missing deadlines because you're stuck doing administrative work</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                      Get Your <span className="gradient-text">Time Back</span>
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Smart Email Management</h3>
                          <p className="text-gray-300">AI handles 80% of your emails with context-aware responses</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Instant Document Insights</h3>
                          <p className="text-gray-300">Get summaries, extract key data, and identify risks in seconds</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">3x Productivity Boost</h3>
                          <p className="text-gray-300">Focus on strategic work while AI handles the routine tasks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ParallaxSection>

          <ProcessShowcase />

          <ParallaxSection speed={0.3}>
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
          </ParallaxSection>

          <ParallaxSection speed={0.4}>
            <Testimonials />
          </ParallaxSection>
          
          <ParallaxSection speed={0.6}>
            <PricingSection onRegisterClick={() => setShowRegister(true)} />
          </ParallaxSection>
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
    </ScrollAnimationWrapper>
  );
}