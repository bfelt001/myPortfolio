import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';


const Home: React.FC = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll z=0">
      <Helmet>
        <title>Breanne's Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* Header */}
      <h1 className="p-10 text-purple-500">From Mechanical Engineer to Web Developer</h1>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
