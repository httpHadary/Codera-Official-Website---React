import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation();


  return (

    <footer
      id="contact-sec"
      className="footer-wrapper footer-layout2 bg-transparent"
    >


      {/* ================= Widget Area ================= */}
      <div className="widget-area">

        <div className="container">

          <div className="row justify-content-between">


            {/* ================= About ================= */}
            <div className="col-md-6 col-xxl-3 col-xl-4">

              <div className="widget footer-widget">

                <div className="th-widget-about">


                  {/* Logo */}
                  <div className="about-logo">

                    <a href="/">

                      <img
                        className="w-75"
                        src="assets/img/icon/edited-photo.re.png"
                        alt="Codera"
                      />

                    </a>

                  </div>


                  {/* Text */}
                  <p className="about-text">

                    {t("footer.aboutText")}

                  </p>


                  {/* Social */}
                  <div className="th-social">

                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a
                      href="https://www.whatsapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>

                  </div>


                </div>

              </div>

            </div>


            {/* ================= Quick Links ================= */}
            <div className="col-md-6 col-xl-auto">

              <div className="widget widget_nav_menu footer-widget">


                <h3 className="widget_title">
                  {t("footer.quickLinks.title")}
                </h3>


                <ul className="menu">

                  <li>
                    <a href="#about-sec">
                      {t("footer.quickLinks.about")}
                    </a>
                  </li>

                  <li>
                    <a href="#service-sec">
                      {t("footer.quickLinks.services")}
                    </a>
                  </li>

                  <li>
                    <a href="#selected-projects">
                      {t("footer.quickLinks.projects")}
                    </a>
                  </li>

                  <li>
                    <a href="#contact-sec">
                      {t("footer.quickLinks.contact")}
                    </a>
                  </li>

                </ul>

              </div>

            </div>


            {/* ================= Contact Info ================= */}
            <div className="col-md-6 col-xl-auto">

              <div className="widget footer-widget">


                <h3 className="widget_title">
                  {t("footer.contact.title")}
                </h3>


                <div className="th-widget-contact">


                  {/* Phone */}
                  <div className="contact-feature">

                    <div className="icon-btn">
                      <i className="fa-solid fa-phone"></i>
                    </div>

                    <div className="media-body">

                      <p className="contact-feature_label">
                        {t("footer.contact.phone")}
                      </p>

                      <a
                        href="tel:+19088000393"
                        className="contact-feature_link"
                      >
                        +190-8800-0393
                      </a>

                    </div>

                  </div>


                  {/* Email */}
                  <div className="contact-feature">

                    <div className="icon-btn">
                      <i className="fa-solid fa-envelope"></i>
                    </div>

                    <div className="media-body">

                      <p className="contact-feature_label">
                        {t("footer.contact.email")}
                      </p>

                      <a
                        href="mailto:info@codera.com"
                        className="contact-feature_link"
                      >
                        info@codera.com
                      </a>

                    </div>

                  </div>


                  {/* Location */}
                  <div className="contact-feature">

                    <div className="icon-btn">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>

                    <div className="media-body">

                      <p className="contact-feature_label">
                        {t("footer.contact.location")}
                      </p>

                      <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-feature_link"
                      >
                        54 Flemington, USA
                      </a>

                    </div>

                  </div>


                </div>

              </div>

            </div>


          </div>

        </div>

      </div>


      {/* ================= Shapes ================= */}
      <div className="shape-mockup" data-top="0%" data-left="0%">
        <img src="assets/img/shape/footer_shape_3.png" alt="shape" />
      </div>

      <div className="shape-mockup" data-top="0%" data-right="0%">
        <img src="assets/img/shape/footer_shape_4.png" alt="shape" />
      </div>

      <div className="shape-mockup" data-bottom="0%" data-left="0%">
        <img src="assets/img/shape/footer_shape_5.png" alt="shape" />
      </div>

      <div className="shape-mockup" data-bottom="0%" data-right="0%">
        <img src="assets/img/shape/footer_shape_6.png" alt="shape" />
      </div>


    </footer>
  );
}

export default Footer;
