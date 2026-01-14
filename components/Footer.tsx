import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-vibecodex-lime rounded-full" />
            <span className="font-display font-bold text-lg tracking-tighter text-white">
            VIBELOGIC<span className="text-vibecodex-lime">.</span>LABS
            </span>
        </div>
        
        <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Vibelogic Labs. All rights reserved.
        </p>

        <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-vibecodex-lime text-sm uppercase font-bold">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-vibecodex-lime text-sm uppercase font-bold">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-vibecodex-lime text-sm uppercase font-bold">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;