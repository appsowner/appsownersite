"use client";

import { useState } from 'react';
import { ArrowRight, Brain, Cpu, Bot, Workflow, Mail, Sparkles } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    { 
      icon: <Brain className="w-8 h-8" />, 
      title: 'AI Integration', 
      desc: 'Custom AI solutions to automate your business processes' 
    },
    { 
      icon: <Workflow className="w-8 h-8" />, 
      title: 'Process Automation', 
      desc: 'Streamline workflows with intelligent automation' 
    },
    { 
      icon: <Bot className="w-8 h-8" />, 
      title: 'Chatbots & Virtual Assistants', 
      desc: 'AI-powered conversational interfaces' 
    },
    { 
      icon: <Cpu className="w-8 h-8" />, 
      title: 'Machine Learning', 
      desc: 'Data-driven insights and predictions' 
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Image
              src="/logo.png"
              alt="AppsOwner"
              width={180}
              height={40}
              className="w-auto h-8"
            />
            <a 
              href="mailto:contacto@appsowner.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-6">
              Intelligent <span className="text-primary">Automation</span> for Your <span className="text-secondary">Business</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your business with cutting-edge AI automation solutions that drive efficiency and innovation
            </p>
            <div className="flex gap-4">
              <button className="group bg-primary text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-all">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="mailto:contacto@appsowner.com"
                className="group px-6 py-3 rounded-full font-medium flex items-center gap-2 border border-primary/20 hover:border-primary/40 transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 bg-gradient-to-l from-secondary/20 to-transparent rounded-l-full blur-3xl" />
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leverage the power of AI to transform your business operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
                <div className={`absolute bottom-0 left-0 h-1 bg-secondary transition-all duration-300 rounded-b-xl
                  ${hoveredService === index ? 'w-full' : 'w-0'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4">Why Choose AppsOwner</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver intelligent automation solutions that drive real business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
              <h3 className="text-xl font-semibold mb-4 text-primary">Expertise</h3>
              <p className="text-muted-foreground">
                Our team of AI specialists brings years of experience in developing custom automation solutions
              </p>
            </div>
            <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/10">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Innovation</h3>
              <p className="text-muted-foreground">
                We stay at the forefront of AI technology to deliver cutting-edge solutions
              </p>
            </div>
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
              <h3 className="text-xl font-semibold mb-4 text-primary">Results</h3>
              <p className="text-muted-foreground">
                Our solutions deliver measurable improvements in efficiency and productivity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Ready to Automate?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how we can transform your business with intelligent automation
          </p>
          <a 
            href="mailto:contacto@appsowner.com"
            className="group bg-primary text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-all mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Image
              src="/logo.png"
              alt="AppsOwner"
              width={140}
              height={30}
              className="w-auto h-6 mx-auto mb-4"
            />
            <p className="text-muted-foreground">© {new Date().getFullYear()} AppsOwner. All rights reserved.</p>
            <a href="mailto:contacto@appsowner.com" className="text-primary hover:text-primary/80 transition-colors mt-2 inline-block">
              contacto@appsowner.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}