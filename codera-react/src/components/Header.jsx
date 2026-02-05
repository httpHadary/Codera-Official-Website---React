import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Header({ openMenu }) {

  const { t, i18n } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);

  const isArabic = i18n.language === "ar";

  useEffect(() => {

    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  const changeLang = () => {
      setTimeout(() => {
        i18n.changeLanguage(isArabic ? "en" : "ar");
      }, 150);
  };

  return (
    <header className="th-header header-layout2">

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

                    <li><a href="#hero">{t("nav.home")}</a></li>
                    <li><a href="#about-sec">{t("nav.about")}</a></li>
                    <li><a href="#service-sec">{t("nav.services")}</a></li>
                    <li><a href="#why-sec">{t("nav.why")}</a></li>
                    <li><a href="#clients-sec">{t("nav.testimonials")}</a></li>
                    <li><a href="#selected-projects">{t("nav.clients")}</a></li>
                    <li><a href="#contact-sec">{t("nav.contact")}</a></li>

                  </ul>

                </nav>

              </div>


              {/* Buttons */}
              <div className="col-auto">

                <div className="header-button">

                  {/* Language Switch */}
                  <button
                    onClick={changeLang}
                    className="th-btn lang-btn d-none d-lg-inline-flex"
                  >
                    EN | AR
                  </button>


                  {/* Mobile Button */}
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
