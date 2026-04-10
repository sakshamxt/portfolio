import { motion } from 'framer-motion';
import data from '../data.json';
import { getIcon } from '../utils/IconMap';

export default function Hero() {
  const { personal, links } = data;
  const spring = { type: "spring", stiffness: 70, damping: 20, mass: 1.2 };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={spring}
      className="relative min-h-[85vh] flex flex-col justify-center pt-20 pb-24"
    >
      {/* Subtle Dot Grid Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-border) 2px, transparent 0)', 
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
        }}
      ></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ...spring, delay: 0.2 }}
            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-tactile bg-[var(--color-bg-surface)] shrink-0 border border-[var(--color-border)]"
          >
            <img src="/photo.jpg" alt={personal.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
          
          <div className="flex gap-3 pb-2">
            {links.map((link, i) => (
              <motion.a 
                key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.3 + (i * 0.1) }}
                className="w-12 h-12 flex items-center justify-center bg-[var(--color-bg-surface)] border border-[var(--color-border)] shadow-tactile rounded-full hover:shadow-glow hover:border-[var(--color-accent)]/50 hover:-translate-y-1 transition-all duration-300 group"
                aria-label={link.name}
              >
                {getIcon(link.icon, { size: 20, className: "text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" })}
              </motion.a>
            ))}
          </div>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-6xl md:text-[7.5rem] font-extrabold tracking-tighter mb-6 leading-[0.9] text-[var(--color-text-main)]"
        >
          {personal.name}<span className="text-[var(--color-accent)]">.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-3xl text-[var(--color-text-muted)] font-medium tracking-tight max-w-2xl leading-snug"
        >
          {personal.tagline}
        </motion.p>
      </div>
    </motion.section>
  );
}