import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="w-full bg-[#222222] px-6 md:px-[14vw] lg:px-[28vw] ">
        <Header/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App