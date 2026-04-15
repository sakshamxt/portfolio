import { motion } from 'framer-motion';
import data from '../data.json';
import { getIcon } from '../utils/IconMap';

export default function Hero() {
  const { personal, links } = data;

  return (
    <section className="min-h-[80vh] flex flex-col justify-center relative py-12 md:py-20">
      <div className="max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10 md:mb-16"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-[var(--color-brand-border)] shrink-0">
            <img src="https://res.cloudinary.com/dcym7htqt/image/upload/q_auto/f_auto/v1776197395/pic_portfolio_i1kw5c.webp" alt={personal.name} className="w-full h-full object-cover select-none" onContextMenu={(e) => e.preventDefault()}
              style={{ WebkitTouchCallout: 'none' }} />
          </div>
          <div>
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest">{personal.name}</h2>
            <p className="text-[var(--color-brand-muted)] text-xs md:text-sm font-medium">{personal.role}</p>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-[7rem] font-black tracking-tighter leading-[1] md:leading-[0.95] mb-8"
        >
          {personal.headline}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 justify-between border-t border-[var(--color-brand-border)] pt-8 mt-8 md:mt-12"
        >
          <p className="text-lg md:text-xl text-[var(--color-brand-muted)] font-medium max-w-lg">
            {personal.subtext}
          </p>

          {/* flex-wrap ensures links don't break the layout on tiny mobile screens */}
          <div className="flex flex-wrap gap-4 md:gap-6 items-center shrink-0">
            {links.map((link) => (
              <a 
                key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent)] transition-all pb-1"
              >
                {getIcon(link.icon, { size: 16 })} {link.name}
              </a>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}