import { motion } from 'framer-motion';
import data from '../data.json';

export default function Endorsements() {
  return (
    <section className="py-16 md:py-24 border-t-2 border-[var(--color-brand-text)] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 px-6 md:px-0">
        
        <div className="lg:col-span-1">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-brand-muted)]">
            What They Say
          </h2>
        </div>
        
        <div className="lg:col-span-3 flex flex-col gap-16 md:gap-20">
          {data.endorsements.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Hidden on small mobile to prevent text overlap */}
              <span className="hidden md:block absolute -top-12 -left-6 text-[8rem] font-serif text-[var(--color-brand-accent)] opacity-10 leading-none select-none">
                "
              </span>
              
              <h3 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-snug mb-6 md:mb-8 relative z-10 max-w-4xl">
                "{item.quote}"
              </h3>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-8 md:w-12 h-[2px] bg-[var(--color-brand-text)]"></div>
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs md:text-sm">{item.author}</p>
                  <p className="text-[var(--color-brand-muted)] text-xs md:text-sm font-medium">{item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}