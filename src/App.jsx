import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen selection:bg-[var(--color-accent)] selection:text-white">
      <main className="max-w-6xl mx-auto px-6 md:px-12">
        <Hero />
        <Skills />
        <Projects />
        <CTA />
        
        <footer className="py-12 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--color-text-muted)] text-sm font-mono">
          <p>© {new Date().getFullYear()} Saksham Tyagi.</p>
          
        </footer>
      </main>
    </div>
  );
}

export default App;