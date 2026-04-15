import { motion } from 'framer-motion';
import data from '../data.json';

export default function Toolkit() {
  return (
    <section className="py-24 border-t-2 border-[var(--color-brand-text)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold tracking-tighter">The Toolkit.</h2>
          <p className="mt-4 text-[var(--color-brand-muted)] text-lg">Languages, frameworks, and architecture used to solve the problems above.</p>
        </div>
        
        <div className="md:col-span-2 flex flex-wrap gap-4">
          {data.toolkit.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-brand-text)] border border-[var(--color-brand-border)] bg-white px-6 py-4 rounded-xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}