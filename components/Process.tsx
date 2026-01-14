import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: (ProcessStep & { icon: any })[] = [
  {
    number: '01',
    title: 'Audit',
    description: 'We analyze your current digital footprint and identify conversion bottlenecks.',
    icon: Search
  },
  {
    number: '02',
    title: 'Architect',
    description: 'We design the perfect user journey and build the AI agents required to support it.',
    icon: PenTool
  },
  {
    number: '03',
    title: 'Automate',
    description: 'We launch the system and connect your workflows for hands-free lead generation.',
    icon: Rocket
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-display font-bold text-5xl md:text-8xl uppercase tracking-tight">
            The <span className="text-vibecodex-lime">Blueprint</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            From chaos to conversion in three steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gray-800 -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-vibecodex-dark border border-gray-800 p-8 h-full transition-all duration-300 hover:border-vibecodex-lime hover:shadow-[0_0_30px_rgba(204,255,0,0.1)]">
                <div className="flex justify-between items-start mb-8">
                  <div className="bg-gray-900 p-4 rounded-full text-vibecodex-lime group-hover:bg-vibecodex-lime group-hover:text-black transition-colors">
                    <step.icon size={28} />
                  </div>
                  <span className="font-display font-bold text-6xl text-gray-800 group-hover:text-white/10 transition-colors">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-3xl uppercase mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;