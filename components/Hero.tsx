import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Animated Background Image Container */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-vibecodex-dark/80 z-10" /> {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vibecodex-dark/50 to-vibecodex-dark z-10" />
        
        {/* Breathing Background Image */}
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          src="https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2000&auto=format&fit=crop" 
          alt="Abstract Neon Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      {/* Background Abstract Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.05] pointer-events-none z-10" />
      
      {/* Glowing Blob */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vibecodex-lime blur-[150px] opacity-20 rounded-full pointer-events-none z-10"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <h1 className="font-display font-bold text-[12vw] leading-[0.8] tracking-tighter text-white uppercase break-words mix-blend-exclusion">
              Websites<br />
              <span className="text-stroke">That Sell.</span>
            </h1>
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="flex flex-col md:flex-row md:items-end w-full mt-8 md:mt-4 gap-8 md:gap-20"
          >
             <h1 className="font-display font-bold text-[12vw] leading-[0.8] tracking-tighter text-vibecodex-lime uppercase break-words md:ml-auto md:text-right">
              AI That<br />
              Works.
            </h1>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between w-full mt-16 items-start md:items-end gap-8">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-gray-300 text-lg md:text-xl max-w-md font-light leading-relaxed drop-shadow-md"
            >
              We build high-performance digital engines and AI agents that capture leads while you sleep.
            </motion.p>

            <motion.a 
              href="#contact"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.6 }}
              className="group relative px-8 py-6 bg-vibecodex-lime text-vibecodex-dark font-display font-bold text-xl uppercase tracking-wider overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Free Audit <ArrowDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4 z-20"
      >
        <div className="w-[1px] h-24 bg-gray-500 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-1/2 bg-vibecodex-lime"
          />
        </div>
        <span className="text-xs text-white uppercase tracking-widest -rotate-90 origin-left translate-x-4">Scroll</span>
      </motion.div>
    </div>
  );
};

export default Hero;