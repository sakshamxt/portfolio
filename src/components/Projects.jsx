import { motion } from 'framer-motion';
import data from '../data.json';
import { getIcon } from '../utils/IconMap';

export default function Projects() {
  const spring = { type: "spring", stiffness: 50, damping: 20 };

  return (
    <section className="py-32 relative z-10">
      <div className="mb-20 flex items-center justify-between border-b border-[var(--color-border)] pb-8">
        <h2 className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-widest">
          Selected Work
        </h2>
        <span className="text-3xl font-mono text-[var(--color-text-muted)] opacity-50">/0{data.projects.length}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24 items-start">
        {data.projects.map((project, index) => {
          const isEven = index % 2 !== 0; 
          
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }} transition={spring}
              className={`group flex flex-col ${isEven ? 'md:mt-32' : ''}`}
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-tactile bg-[var(--color-bg-surface)] border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/40 transition-colors duration-500 mb-8 block">
                <motion.img 
                  whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 100, damping: 30 }}
                  src={project.imageUrl} alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* FIXED ARROW COLOR */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 bg-[var(--color-bg-surface)] text-[var(--color-text-main)] border border-[var(--color-border)] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[var(--color-accent)] hover:text-black hover:border-[var(--color-accent)] transition-all shadow-xl">
                    {getIcon('arrow', { size: 20 })}
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col flex-grow pr-4">
                <h3 className="text-3xl font-bold tracking-tight text-[var(--color-text-main)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6 text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] px-3 py-1.5 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto border-l-2 border-[var(--color-accent)]/50 pl-4 py-1">
                  <p className="text-[var(--color-text-main)] font-medium text-sm leading-relaxed">
                    {project.caseStudy}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}