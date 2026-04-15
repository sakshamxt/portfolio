import Hero from './components/Hero';
import Projects from './components/Projects';
import Endorsements from './components/Endorsements';
import Toolkit from './components/Toolkit';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <Hero />
        <Projects />
        <Endorsements />
        <Toolkit />
      </main>
      
      <CTA />
      
      <footer className="py-8 bg-[var(--color-brand-text)] text-white text-center font-bold uppercase tracking-widest text-xs">
        <p>© {new Date().getFullYear()} Saksham Tyagi.</p>
      </footer>
    </div>
  );
}

export default App;