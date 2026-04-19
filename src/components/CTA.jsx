import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CTA() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // IMPORTANT: Replace this with your free access key from web3forms.com
    const ACCESS_KEY = "e0eeea8e-9313-49c2-883d-f57e2a7e2c82"; 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Hide the success toast after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 md:py-32 border-t-2 border-[var(--color-brand-text)] bg-[var(--color-brand-accent)] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Heading */}
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] mb-8">
              LET'S <br/> TALK.
            </h2>
            <p className="text-lg md:text-xl font-medium max-w-md opacity-90 leading-relaxed">
              I am currently open for freelance projects. Drop your details below, and I will reach out to you shortly.
            </p>
          </div>

          {/* Right Column: The Form */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="relative">
                  <input 
                    type="text" name="name" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Full Name *"
                    className="w-full bg-transparent border-b-2 border-white/30 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder:text-white/50"
                  />
                </div>
                {/* Email */}
                <div className="relative">
                  <input 
                    type="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="Email Address *"
                    className="w-full bg-transparent border-b-2 border-white/30 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder:text-white/50"
                  />
                </div>
              </div>

              {/* Phone (Optional) */}
              <div className="relative">
                <input 
                  type="tel" name="phone"
                  value={formData.phone} onChange={handleChange}
                  placeholder="Phone Number (Optional)"
                  className="w-full bg-transparent border-b-2 border-white/30 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder:text-white/50"
                />
              </div>

              {/* Message (Optional) */}
              <div className="relative">
                <textarea 
                  name="message" rows="4"
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell me about your project or role (Optional)"
                  className="w-full bg-transparent border-b-2 border-white/30 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder:text-white/50 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="self-start mt-4 px-10 py-4 bg-white text-[var(--color-brand-accent)] font-black uppercase tracking-widest text-sm rounded-full hover:bg-[var(--color-brand-text)] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'error' && (
                <p className="text-sm font-bold bg-white/20 px-4 py-2 w-max rounded-md">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            {/* Success Toast Overlay */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-[var(--color-brand-accent)] flex flex-col items-center justify-center text-center z-10"
                >
                  <div className="bg-white text-[var(--color-brand-text)] p-8 md:p-12 rounded-xl shadow-2xl max-w-sm w-full border border-gray-100">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                    <p className="text-gray-600 font-medium">Thank you for reaching out. I will get back to you shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}