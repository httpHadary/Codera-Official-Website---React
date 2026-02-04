import { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import ScrollArrow from "./components/ScrollArrow";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileOpen]);

  return (
    <>
      <ScrollArrow />

      <Header openMenu={() => setMobileOpen(true)} />

      <MobileMenu
        isOpen={mobileOpen}
        closeMenu={() => setMobileOpen(false)}
      />

      {}
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <Projects />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
