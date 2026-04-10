// src/components/About.jsx
import { motion } from 'framer-motion';
import data from '../data.json';

export default function About() {
  return (
    <motion.section 
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className="py-24 border-t border-zinc-900"
    >
      <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-10">About</h2>
      <p className="text-2xl md:text-4xl leading-snug text-zinc-100 max-w-4xl font-medium tracking-tight">
        {data.personal.about}
      </p>
    </motion.section>
  );
}