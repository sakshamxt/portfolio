import { motion } from 'framer-motion';
import data from '../data.json';
import { getIcon } from '../utils/IconMap';

export default function Projects() {
  return (
    <section className="py-16 md:py-24 border-t-2 border-[var(--color-brand-text)]">
      <div className="mb-12 md:mb-24 flex items-baseline justify-between">
        <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase">Work.</h2>
      </div>
      
      <div className="flex flex-col gap-20 lg:gap-32">
        {data.projects.map((project, index) => (
          <div key={project.id} className="relative flex flex-col lg:flex-row gap-8 lg:gap-24 items-start border-b border-[var(--color-brand-border)] pb-20 lg:pb-32">
            
            <div className="w-full lg:w-1/3 lg:sticky top-24 z-10 bg-[var(--color-brand-bg)] lg:bg-transparent pb-4 lg:pb-0">
              <span className="text-[var(--color-brand-accent)] font-bold text-lg md:text-xl mb-2 md:mb-4 block">0{index + 1}</span>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2 md:mb-4 leading-none">
                {project.title}
              </h3>
              <p className="text-base md:text-lg text-[var(--color-brand-muted)] font-medium mb-6">
                {project.type}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white border border-[var(--color-brand-border)] text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.liveLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 md:gap-3 px-5 py-3 md:px-6 md:py-4 bg-[var(--color-brand-text)] text-white text-sm md:text-base font-bold rounded-full hover:bg-[var(--color-brand-accent)] transition-colors w-max"
              >
                Visit Project {getIcon('arrow', { size: 16 })}
              </a>
            </div>

            <div className="w-full lg:w-2/3 flex flex-col gap-8 md:gap-12">
              <div className="w-full aspect-[4/3] md:aspect-[16/10] bg-[var(--color-brand-border)] rounded-sm overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-2">
                <div>
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-brand-muted)] mb-2 md:mb-3">01. The Problem</h4>
                  <p className="text-base md:text-lg leading-relaxed">{project.story.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-brand-muted)] mb-2 md:mb-3">02. The Approach</h4>
                  <p className="text-base md:text-lg leading-relaxed">{project.story.approach}</p>
                </div>
                
                <div className="md:col-span-2 bg-white p-6 md:p-10 border border-[var(--color-brand-border)]">
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-brand-accent)] mb-2 md:mb-3">03. The Result</h4>
                  <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight">
                    {project.story.solution}
                  </p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}