import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Phone, Loader2, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    goals: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // 1. Prepare Data
    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'web_lead'
    };

    // 2. Simulate Database Storage (Mock API Call)
    // In a real app, you would fetch() to your API/Zapier Webhook here.
    // e.g., await fetch('https://api.yourdomain.com/leads', { method: 'POST', body: JSON.stringify(payload) });
    console.log("Saving to database...", payload); 

    // Simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 3. Construct WhatsApp Message
    const message = `*New Project Audit Request*
---------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Website:* ${formData.website || 'N/A'}
*Goals:* ${formData.goals}
---------------------------`;

    // 4. Redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917400394128?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setStatus('success');
    
    // Reset form after a delay
    setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', website: '', goals: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-6xl md:text-8xl text-white uppercase mb-6">
              Ready to <span className="text-vibecodex-lime">Scale?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stop losing leads to slow websites and missed calls. Let's build your digital engine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Direct Contact Options */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-4"
            >
                <a 
                    href="https://wa.me/917400394128" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-between p-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl transition-all hover:scale-[1.02] group"
                >
                    <div className="flex items-center gap-4">
                        <MessageCircle size={32} className="fill-current" />
                        <div className="text-left">
                            <h3 className="font-bold text-lg uppercase">Chat on WhatsApp</h3>
                            <p className="text-sm opacity-90">Fastest Response Time</p>
                        </div>
                    </div>
                </a>

                <a 
                    href="mailto:hello@vibelogic.labs" 
                    className="flex items-center justify-between p-6 bg-gray-900 border border-gray-800 hover:border-gray-600 text-white rounded-xl transition-all hover:scale-[1.02] group"
                >
                    <div className="flex items-center gap-4">
                        <Mail size={32} className="text-vibecodex-lime" />
                        <div className="text-left">
                            <h3 className="font-bold text-lg uppercase">Email Us</h3>
                            <p className="text-sm text-gray-400">hello@vibelogic.labs</p>
                        </div>
                    </div>
                </a>
            </motion.div>

            {/* Form */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative"
            >
                <AnimatePresence mode="wait">
                    {status === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="h-full min-h-[400px] flex flex-col items-center justify-center bg-gray-900 border border-vibecodex-lime/30 rounded-xl p-8 text-center"
                        >
                            <div className="w-16 h-16 bg-vibecodex-lime rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 size={32} className="text-black" />
                            </div>
                            <h3 className="font-display font-bold text-3xl text-white uppercase mb-2">Request Received!</h3>
                            <p className="text-gray-400">Opening WhatsApp to finalize your inquiry...</p>
                        </motion.div>
                    ) : (
                        <motion.form 
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="NAME" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={status === 'sending'}
                                    required
                                    className="w-full bg-gray-900 border border-gray-800 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-vibecodex-lime rounded-lg disabled:opacity-50"
                                />
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="EMAIL" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={status === 'sending'}
                                    required
                                    className="w-full bg-gray-900 border border-gray-800 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-vibecodex-lime rounded-lg disabled:opacity-50"
                                />
                            </div>
                            <input 
                                type="text" 
                                name="website"
                                placeholder="WEBSITE URL (OPTIONAL)" 
                                value={formData.website}
                                onChange={handleChange}
                                disabled={status === 'sending'}
                                className="w-full bg-gray-900 border border-gray-800 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-vibecodex-lime rounded-lg disabled:opacity-50"
                            />
                            <textarea 
                                name="goals"
                                placeholder="TELL US ABOUT YOUR GOALS" 
                                rows={4}
                                value={formData.goals}
                                onChange={handleChange}
                                disabled={status === 'sending'}
                                required
                                className="w-full bg-gray-900 border border-gray-800 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-vibecodex-lime rounded-lg resize-none disabled:opacity-50"
                            />
                            <button 
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-white text-black font-display font-bold uppercase text-lg p-4 hover:bg-vibecodex-lime transition-colors disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <Loader2 className="animate-spin" /> Processing...
                                    </>
                                ) : (
                                    'Request Free Audit'
                                )}
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;