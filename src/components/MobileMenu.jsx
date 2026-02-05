import React from "react";
import { useTranslation } from "react-i18next";

function MobileMenu({ isOpen, closeMenu }) {

  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const changeLang = () => {
    setTimeout(() => {
      i18n.changeLanguage(isArabic ? "en" : "ar");
    }, 150);
    closeMenu();
  };


  return (
    <>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>

        <div className="mobile-menu-header">

          <img
            src="assets/img/icon/edited-photo.png"
            alt="Codera"
            className="mobile-logo"
          />

          <button
            className="mobile-close"
            onClick={closeMenu}
          >
            &times;
          </button>

        </div>


        <ul className="mobile-menu-list">

          <li><a href="#hero" onClick={closeMenu}>{t("nav.home")}</a></li>
          <li><a href="#about-sec" onClick={closeMenu}>{t("nav.about")}</a></li>
          <li><a href="#service-sec" onClick={closeMenu}>{t("nav.services")}</a></li>
          <li><a href="#why-sec" onClick={closeMenu}>{t("nav.why")}</a></li>
          <li><a href="#clients-sec" onClick={closeMenu}>{t("nav.testimonials")}</a></li>
          <li><a href="#selected-projects" onClick={closeMenu}>{t("nav.clients")}</a></li>
          <li><a href="#contact-sec" onClick={closeMenu}>{t("nav.contact")}</a></li>


          {/* Language Switch */}
          <li className="lang-switch">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changeLang();
              }}
            >
              {isArabic ? t("lang.english") : t("lang.arabic")}
            </a>

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
