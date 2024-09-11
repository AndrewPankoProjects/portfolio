import './App.css';
import Home from './sections/Home/Home.js';
import About from './sections/About/About.js';
import Projects from './sections/Projects/Projects.js';
import Experience from './sections/Experience/Experience.js';
import Contact from './sections/Contact/Contact.js';
//import Scrollup from './assets/Scrollup/scrollup.js';
import Navbar from './assets/Navbar/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
        <main>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
    </>
  );
}

