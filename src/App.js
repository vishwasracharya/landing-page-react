/* DEPENDANCIES imports */
import React from 'react';

/* COMPONENTS imports */
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import OurTeam from './components/OurTeam/OurTeam';
import OurProjects from './components/OurProjects/OurProjects';
import OurClients from './components/OurClients/OurClients';
import Footer from './components/Footer/Footer';


function App(){
  return (
    <div>
      <Navbar /> 
      <Hero />
      <About />
      <Services />
      <OurTeam />
      <OurProjects />
      <OurClients />
      <Footer />
    </div>
  );
}

export default App;
