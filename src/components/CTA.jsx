import data from '../data.json';

export default function CTA() {
  const emailObj = data.links.find(link => link.name.toLowerCase() === 'email');
  const emailUrl = emailObj ? emailObj.url : "#";

  return (
    <section className="py-24 md:py-48 border-t-2 border-[var(--color-brand-text)] bg-[var(--color-brand-accent)] text-white text-center">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-none mb-6 md:mb-10">
          LET'S TALK.
        </h2>
        {/* break-all ensures long emails wrap to the next line on tiny phones */}
        <a 
          href={emailUrl} 
          className="inline-block text-xl md:text-3xl lg:text-4xl font-bold border-b-2 md:border-b-4 border-white hover:text-black hover:border-black transition-colors pb-1 md:pb-2 break-all"
        >
          {emailUrl.replace('mailto:', '')}
        </a>
      </div>
    </section>
  );
}