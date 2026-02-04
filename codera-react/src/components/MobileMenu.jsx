import React from "react";

function MobileMenu({ isOpen, closeMenu }) {
  return (
    <>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        
        <div className="mobile-menu-header">
          <img
            src="/assets/img/icon/edited-photo.png"
            alt="Codera"
            className="mobile-logo"
          />

          <button className="mobile-close" onClick={closeMenu}>
            &times;
          </button>
        </div>

        <ul className="mobile-menu-list">

          <li><a href="#hero" onClick={closeMenu}>Home</a></li>
          <li><a href="#about-sec" onClick={closeMenu}>About Us</a></li>
          <li><a href="#service-sec" onClick={closeMenu}>Services</a></li>
          <li><a href="#why-sec" onClick={closeMenu}>Why Codera</a></li>
          <li><a href="#clients-sec" onClick={closeMenu}>Testimonials</a></li>
          <li><a href="#selected-projects" onClick={closeMenu}>Our Clients</a></li>
          <li><a href="#contact-sec" onClick={closeMenu}>Contact Us</a></li>

          <li className="lang-switch">
            <a href="/index-ar.html">Arabic</a>
          </li>

        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default MobileMenu;
