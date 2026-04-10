import { motion } from 'framer-motion';
import data from '../data.json';
import { getIcon } from '../utils/IconMap';

export default function CTA() {
  // Find the email link from your JSON data, or fallback to empty string
  const emailObj = data.links.find(link => link.name.toLowerCase() === 'email');
  const emailUrl = emailObj ? emailObj.url : "#";

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-32 border-t border-[var(--color-border)] text-center relative overflow-hidden"
    >
      {/* Background glow for emphasis */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-[var(--color-text-main)]">
          Let's build something <br className="hidden md:block"/>
          <span className="text-[var(--color-accent)]">extraordinary.</span>
        </h2>
        
        <p className="text-[var(--color-text-muted)] text-xl max-w-xl mx-auto mb-10 font-light">
          I am currently open for new roles and exciting freelance projects. If you have an idea, let's make it happen.
        </p>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={emailUrl} 
          className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-text-main)] text-black font-bold rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors shadow-glow"
        >
          {getIcon('mail', { size: 20 })}
          Get In Touch
        </motion.a>
      </div>
    </motion.section>
  );
}