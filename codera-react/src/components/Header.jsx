import React, { useEffect, useState } from "react";

function Header({openMenu}) {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  return (
    <header className="th-header header-layout2">


      {/* IMPORTANT: sticky class goes here */}
      <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>

        <div className="menu-area">

          <div className="container">

            <div className="row align-items-center justify-content-between">


              {/* Logo */}
              <div className="col-auto">

                <div className="header-logo">
                  <a href="#hero">

                    <img
                      src="/assets/img/icon/edited-photo.png"
                      alt="Codera"
                      width="180"
                    />

                  </a>
                </div>

              </div>


              {/* Menu */}
              <div className="col-auto">

                <nav className="main-menu d-none d-lg-inline-block">

                  <ul>

                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about-sec">About</a></li>
                    <li><a href="#service-sec">Services</a></li>
                    <li><a href="#why-sec">Why Us</a></li>
                    <li><a href="#clients-sec">Testimonials</a></li>
                    <li><a href="#selected-projects">Clients</a></li>
                    <li><a href="#contact-sec">Contact</a></li>

                  </ul>

                </nav>

              </div>


              {/* Buttons */}
              <div className="col-auto">

                <div className="header-button">


                  <a
                    href="/index-ar.html"
                    className="th-btn lang-btn d-none d-lg-inline-flex"
                  >
                    EN | AR
                  </a>


                  <button
                    className="th-menu-toggle d-inline-block d-lg-none"
                    type="button"
                    onClick={openMenu}
                  >

                    <i className="far fa-bars"></i>
                  </button>


                </div>

              </div>


            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;