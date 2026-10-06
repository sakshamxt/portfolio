import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, CheckCircle2 } from 'lucide-react';
import data from './data.json';

const SectionHeader = ({ title, subtitle, dark = false }) => (
  <div className="text-center mb-12 md:mb-24 px-4">
    <h2 className={`text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight mb-4 md:mb-6 ${dark ? 'text-white' : 'text-[#1D1D1F]'}`}>{title}</h2>
    {subtitle && <p className={`text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto leading-relaxed ${dark ? 'text-[#A1A1A6]' : 'text-[#86868B]'}`}>{subtitle}</p>}
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // We are using Web3Forms to send the email directly to you without needing a backend server.
      // You will need to get a free access key from https://web3forms.com/ using your email.
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b0a6e894-0ad0-46b9-ae4b-734f5bc50c2e',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission from Portfolio'
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] font-sans selection:bg-[#FF5A00] selection:text-white scroll-smooth">

      {/* RICH HERO SECTION */}
      <section className="relative h-screen bg-[#000000] overflow-hidden flex flex-col items-center justify-center px-4">
        {/* Dynamic glowing background elements */}
        <motion.div
          animate={{
            x: ['-10%', '10%', '-5%', '0%'],
            y: ['-10%', '5%', '10%', '0%'],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-gradient-to-tr from-orange-600 via-red-500 to-amber-500 rounded-full blur-[120px] opacity-30 mix-blend-screen pointer-events-none"
        ></motion.div>

        <motion.div style={{ y: yHero, opacity: opacityHero }} className="text-center z-10 w-full max-w-5xl">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}
            src="https://res.cloudinary.com/dcym7htqt/image/upload/q_auto/f_auto/v1776197395/pic_portfolio_i1kw5c.webp"
            alt="Profile"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-6 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          />
          <motion.h2
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight"
          >
            {data.personal.name}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="text-[#FF5A00] font-semibold tracking-widest uppercase text-sm mb-10"
          >
            {data.personal.role}
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6 md:mb-8 max-w-4xl mx-auto"
          >
            {data.personal.headline}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl font-medium text-[#A1A1A6] max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12 mt-4 md:mt-6"
          >
            {data.personal.subtext}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <a href="#contact" className="inline-block bg-[#FF5A00] text-white font-semibold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,90,0,0.3)]">
              Let's Talk
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* RICH PROJECTS SECTION */}
      <section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <SectionHeader title="Selected Work." subtitle="A look at some of the products I've engineered from the ground up." />

        <div className="flex flex-col gap-16 md:gap-32 mt-12 md:mt-20">
          {data.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative bg-white rounded-3xl md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100 flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-20 flex flex-col justify-center relative z-10 bg-white order-2 md:order-none">
                <span className="text-[#FF5A00] font-bold text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-widest">{project.type}</span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1D1D1F] mb-4 md:mb-6">{project.title}</h3>
                <p className="text-lg md:text-xl text-[#86868B] leading-relaxed mb-8 md:mb-12 font-medium">
                  {project.story.solution}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-4 md:px-5 py-2 bg-[#F5F5F7] rounded-full text-xs md:text-sm font-semibold text-[#1D1D1F]">{tech}</span>
                  ))}
                </div>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#1D1D1F] text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#000] transition-colors hover:scale-105 duration-300 w-max">
                  View Project <ArrowUpRight size={20} />
                </a>
              </div>

              <div className="w-full md:w-[45%] relative bg-[#F5F5F7] flex items-center justify-center py-12 px-4 md:p-16 overflow-hidden min-h-[450px] md:min-h-[500px] order-1 md:order-none">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 opacity-50"></div>
                <img src={project.imageUrl} alt={project.title} className="w-[220px] sm:w-[260px] md:w-[300px] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)] group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOOLKIT SECTION */}
      <section className="py-32 px-4 md:px-8 bg-white border-y border-[#d2d2d7]/30">
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionHeader title="Toolkit." subtitle="Technologies and tools I use to build scalable products." />
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-12 md:mt-16 max-w-4xl mx-auto">
            {data.toolkit.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#F5F5F7] text-[#1D1D1F] font-semibold text-base md:text-lg lg:text-xl border border-gray-200 hover:border-[#FF5A00] hover:text-[#FF5A00] transition-colors cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* RICH ENDORSEMENTS SECTION */}
      <section className="py-32 px-4 md:px-8 bg-[#000000] text-white">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader title="What people say." dark={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-20">
            {data.endorsements.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-[3rem] bg-[#1D1D1F] border border-white/10 flex flex-col relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-[#FF5A00]/20 transition-colors duration-700"></div>
                <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 md:mb-12 text-[#F5F5F7] relative z-10">"{item.quote}"</p>
                <div className="mt-auto flex items-center gap-4 md:gap-6 relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center font-bold text-xl md:text-2xl shadow-inner border border-white/20 shrink-0">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-lg md:text-xl">{item.author}</p>
                    <p className="text-[#86868B] font-medium text-sm md:text-lg">{item.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 px-4 md:px-8 bg-[#111111] text-white border-t border-white/5">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left side: Contact Info */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 md:mb-8">Let's build together.</h2>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#A1A1A6] leading-relaxed mb-12 md:mb-16 max-w-lg">
              I'm currently available for freelance work. If you have a project that needs some creative engineering, I'd love to hear about it.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Mail size={20} className="text-[#FF5A00] md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-[#A1A1A6] uppercase tracking-widest mb-1">Email</p>
                  <a href={`mailto:${data.links.find(l => l.name === 'Email')?.url.replace('mailto:', '') || 'hello@tyagisaksham.in'}`} className="text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#FF5A00] transition-colors break-all">
                    {data.links.find(l => l.name === 'Email')?.url.replace('mailto:', '') || 'hello@tyagisaksham.in'}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Phone size={20} className="text-[#FF5A00] md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-[#A1A1A6] uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+919034256888" className="text-lg md:text-xl lg:text-2xl font-semibold hover:text-[#FF5A00] transition-colors">+91 9034256888</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 md:gap-6 bg-[#1D1D1F] p-6 md:p-12 rounded-3xl md:rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5A00]/10 rounded-full blur-[80px] pointer-events-none"></div>

              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12 relative z-10"
                >
                  <div className="w-16 h-16 bg-[#FF5A00]/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-[#FF5A00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-[#A1A1A6] text-lg">We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <>
                  <div className="flex flex-col gap-2 md:gap-3 relative z-10">
                    <label htmlFor="name" className="text-xs md:text-sm font-semibold text-[#A1A1A6] tracking-wide">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black/20 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 text-white focus:outline-none focus:border-[#FF5A00] transition-colors font-medium text-sm md:text-base"
                      placeholder="Jane Doe"
                      required
                      disabled={formStatus === 'submitting'}
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:gap-3 relative z-10">
                    <label htmlFor="email" className="text-xs md:text-sm font-semibold text-[#A1A1A6] tracking-wide">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-black/20 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 text-white focus:outline-none focus:border-[#FF5A00] transition-colors font-medium text-sm md:text-base"
                      placeholder="jane@example.com"
                      required
                      disabled={formStatus === 'submitting'}
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:gap-3 relative z-10">
                    <label htmlFor="message" className="text-xs md:text-sm font-semibold text-[#A1A1A6] tracking-wide">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-black/20 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 text-white focus:outline-none focus:border-[#FF5A00] transition-colors font-medium resize-none text-sm md:text-base"
                      placeholder="Tell me about your project..."
                      required
                      disabled={formStatus === 'submitting'}
                    ></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <p className="text-red-500 text-sm mt-2 relative z-10">Something went wrong. Please try again or email me directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`bg-[#FF5A00] text-white font-bold text-base md:text-lg py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-[#E04F00] hover:scale-[1.02] transition-all duration-300 mt-2 md:mt-4 shadow-[0_0_20px_rgba(255,90,0,0.3)] relative z-10 ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="bg-[#111111] pt-12 pb-12 px-6 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#86868B] font-medium tracking-wide">
          <p>Copyright © {new Date().getFullYear()} Saksham Tyagi. All rights reserved.</p>
          <div className="flex gap-8">
            {data.links.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}