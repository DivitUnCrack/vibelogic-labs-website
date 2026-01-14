import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Bot, Workflow } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '01',
    title: 'Vibecoding & Web',
    subtitle: 'High-Velocity Digital Engines',
    description: 'Bespoke, high-speed websites optimized for conversion. We don\'t just design; we engineer digital experiences that stick.',
    icon: Code2,
    tags: ['Next.js', 'React', 'Motion'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop' // Retro Computer/Tech
  },
  {
    id: '02',
    title: 'AI Agents',
    subtitle: '24/7 Lead Qualification',
    description: 'Custom LLM integrations that live on your site. They answer FAQs, capture leads, and book appointments while you sleep.',
    icon: Bot,
    tags: ['LLMs', 'Chatbots', 'RAG'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop' // AI Abstract
  },
  {
    id: '03',
    title: 'Automation',
    subtitle: 'Stack Connectivity',
    description: 'Connecting your entire tech stack to eliminate manual data entry. From CRM updates to automated email follow-ups.',
    icon: Workflow,
    tags: ['Zapier', 'API', 'Workflows'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop' // Circuit Board
  }
];

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(services[0].id);

  return (
    <section id="services" className="py-24 bg-vibecodex-dark relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-5xl md:text-7xl text-white uppercase mb-4"
          >
            Our <span className="text-vibecodex-lime">Expertise</span>
          </motion.h2>
          <div className="h-1 w-24 bg-vibecodex-lime" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[600px]">
          {services.map((service) => {
            const isActive = activeId === service.id;
            
            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => setActiveId(service.id)}
                className={`relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm transition-all duration-500 group
                  ${isActive ? 'lg:flex-[3] bg-white/5' : 'lg:flex-[1] hover:bg-white/10 bg-transparent'}
                `}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Dark Overlay - fades out on hover/active to show more image */}
                    <div className={`absolute inset-0 bg-vibecodex-dark/80 mix-blend-multiply z-10 transition-opacity duration-500 ${isActive ? 'opacity-40' : 'opacity-80 group-hover:opacity-40'}`} />
                    
                    {/* The Image - Grayscale by default, Color on Hover/Active */}
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className={`w-full h-full object-cover transition-all duration-700 ease-in-out transform
                            ${isActive ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'}
                        `}
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none z-10" />
                
                <div className="h-full flex flex-col justify-between p-8 relative z-20">
                  <div className="flex justify-between items-start">
                    <span className={`font-display text-4xl font-bold transition-colors duration-300 ${isActive ? 'text-vibecodex-lime' : 'text-white/50 group-hover:text-white'}`}>
                      {service.id}
                    </span>
                    <motion.div 
                      layout
                      className={`p-3 rounded-full backdrop-blur-md border border-white/10 transition-colors duration-300 ${isActive ? 'bg-vibecodex-lime text-black' : 'bg-white/5 text-white group-hover:bg-white/20'}`}
                    >
                      <service.icon size={24} />
                    </motion.div>
                  </div>

                  <div className="mt-auto">
                    <motion.h3 
                      layout="position"
                      className={`font-display font-bold text-3xl uppercase leading-none mb-2 ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}`}
                    >
                      {service.title}
                    </motion.h3>
                    
                    {/* Vertical text for inactive state on desktop */}
                    {!isActive && (
                       <div className="hidden lg:block absolute bottom-24 left-1/2 -translate-x-1/2 rotate-[-90deg] whitespace-nowrap origin-center">
                         <span className="text-white/40 font-display tracking-widest uppercase text-sm group-hover:text-vibecodex-lime transition-colors">Click to Expand</span>
                       </div>
                    )}

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <p className="text-xl text-vibecodex-lime font-medium mb-4">{service.subtitle}</p>
                          <p className="text-gray-200 leading-relaxed mb-6 max-w-lg drop-shadow-md">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 text-xs uppercase font-bold tracking-wider border border-white/20 rounded-full text-white bg-black/30 backdrop-blur-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;