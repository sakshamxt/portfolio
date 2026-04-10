import { motion } from 'framer-motion';
import data from '../data.json';
import { getIcon } from '../utils/IconMap';

export default function Skills() {
  return (
    <motion.section 
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}
      className="py-24"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
        <h2 className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-widest">
          Technical Arsenal
        </h2>
        <p className="text-lg text-[var(--color-text-muted)] max-w-md md:text-right leading-relaxed">
          {data.personal.about}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: index * 0.05, type: "spring" }}
            className="flex flex-col items-center gap-3 p-6 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-xl group hover:border-[var(--color-accent)]/50 hover:shadow-glow transition-all duration-300"
          >
            {getIcon(skill.icon, { size: 24, className: "text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" })}
            <span className="text-xs font-mono text-[var(--color-text-main)]">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}