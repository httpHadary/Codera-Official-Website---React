import { useState, useEffect } from "react";
import i18n from "i18next";

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
  const [fading, setFading] = useState(false);

  useEffect(() => {

    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "auto";

  }, [mobileOpen]);

  useEffect(() => {

    const updateDirection = () => {

      setFading(true); // fade out

      setTimeout(() => {

        const isArabic = i18n.language === "ar";

        document.documentElement.dir =
          isArabic ? "rtl" : "ltr";

        document.documentElement.lang =
          isArabic ? "ar" : "en";

        setFading(false); // fade in

      }, 250); // timing of fade
    };


    updateDirection();

    i18n.on("languageChanged", updateDirection);

    return () => {
      i18n.off("languageChanged", updateDirection);
    };

  }, []);


  return (
      <div className={`app-wrapper ${fading ? "fade-out" : "fade-in"}`}>

      <ScrollArrow />

      <Header openMenu={() => setMobileOpen(true)} />

      <MobileMenu
        isOpen={mobileOpen}
        closeMenu={() => setMobileOpen(false)}
      />

      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <Projects />
      <Clients />
      <Footer />

    </div>
  );
}

export default App;