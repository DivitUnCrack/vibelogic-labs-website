import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, BarChart3, Users, Bot } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-vibecodex-dark relative overflow-hidden">
        {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-5xl md:text-7xl text-white uppercase"
          >
            Proof of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-vibecodex-lime to-emerald-400">Velocity</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-right mt-4 md:mt-0 max-w-sm"
          >
            We don't sell promises. We sell metrics.
          </motion.p>
        </div>

        {/* Featured Case Study */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-gray-900/50 group cursor-pointer"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1 relative z-20 bg-gray-900/90 backdrop-blur-sm lg:bg-transparent">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="px-3 py-1 bg-vibecodex-lime/20 text-vibecodex-lime text-xs font-bold uppercase tracking-wider rounded-full">Case Study</span>
                        <span className="text-gray-500 text-sm">Demo Project</span>
                    </div>
                    
                    <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 uppercase leading-tight group-hover:text-vibecodex-lime transition-colors">
                        AI Lead Capture Ecosystem
                    </h3>
                    
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        We built a conversion-focused landing page integrated with a custom AI chatbot. It doesn't just greet visitors—it answers FAQs, qualifies prospects based on budget and timeline, and routes hot leads directly to the CRM.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-2 text-vibecodex-lime mb-1">
                                <MessageSquare size={20} />
                                <span className="font-bold text-2xl">24/7</span>
                            </div>
                            <p className="text-sm text-gray-400">Response Time</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-vibecodex-lime mb-1">
                                <BarChart3 size={20} />
                                <span className="font-bold text-2xl">40%</span>
                            </div>
                            <p className="text-sm text-gray-400">Lead Flow Incr.</p>
                        </div>
                    </div>

                    <button className="self-start flex items-center gap-2 text-white font-bold uppercase tracking-wide hover:text-vibecodex-lime transition-colors">
                        Read Full Story <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                    </button>
                </div>
                
                <div className="relative h-80 lg:h-auto bg-black overflow-hidden order-1 lg:order-2">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                    
                    {/* Background Image - Grayscale to Color on Hover */}
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" 
                        alt="Analytics Dashboard" 
                        className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    />

                    {/* Animated Overlay - Scanner */}
                    <motion.div 
                        className="absolute inset-0 bg-vibecodex-lime/10 z-20 pointer-events-none"
                        animate={{ top: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{ height: '20%', background: 'linear-gradient(to bottom, transparent, rgba(204,255,0,0.2), transparent)' }}
                    />

                    {/* Floating UI Elements */}
                    <div className="absolute bottom-8 left-8 right-8 z-30">
                         <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                             <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-vibecodex-lime rounded-lg text-black">
                                    <Bot size={16} />
                                </div>
                                <span className="text-white font-bold text-sm">AI Agent Active</span>
                             </div>
                             <div className="space-y-2">
                                 <div className="h-1.5 bg-gray-700 rounded-full w-3/4 overflow-hidden">
                                    <motion.div 
                                        className="h-full bg-vibecodex-lime" 
                                        animate={{ width: ["0%", "80%"] }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    />
                                 </div>
                                 <div className="flex justify-between text-xs text-gray-400">
                                     <span>Processing Leads...</span>
                                     <span className="text-vibecodex-lime">98% Match</span>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;