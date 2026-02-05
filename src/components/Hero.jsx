import { useTranslation } from "react-i18next";

function Hero() {

  const { t } = useTranslation();


  return (
    <div className="th-hero-wrapper hero-1" id="hero">

      {/* Hero Image */}
      <div className="hero-img tilt-active">
        <img
          src="assets/img/hero/hero_img_1_1.png"
          alt="Hero"
        />
      </div>


      <div className="container">
        <div className="hero-style1">

          {/* Brand */}
          <span className="hero-subtitle">
            {t("hero.brand")}
          </span>


          {/* Title Line 1 */}
          <h1 className="hero-title">
            {t("hero.title1")}
          </h1>


          {/* Title Line 2 */}
          <h1 className="hero-title">

            {t("hero.title2_part1")}{" "}

            <span className="text-theme fw-medium">
              {t("hero.title2_highlight")}
            </span>

          </h1>


          {/* Description */}
          <p className="hero-text">
            {t("hero.description")}
          </p>


          {/* About Button */}
          <div className="btn-group">
            <a href="#about-sec" className="th-btn">

              {t("hero.aboutBtn")}

              <i className="fa-regular fa-arrow-right ms-2"></i>

            </a>
          </div>


          {/* Start Button */}
          <div className="btn-group">
            <a
              href="#contact-sec"
              className="th-btn m-3"
            >

              {t("hero.startBtn")}

              <i className="fa-regular fa-arrow-right ms-2"></i>

            </a>
          </div>

        </div>
      </div>


      {/* Shapes */}
      <div className="hero-shape1">
        <img
          src="assets/img/hero/hero_shape_1_1.svg"
          alt="shape"
        />
      </div>

      <div className="hero-shape2">
        <img
          src="assets/img/hero/hero_shape_1_2.svg"
          alt="shape"
        />
      </div>

      <div className="hero-shape3">
        <img
          src="assets/img/hero/hero_shape_1_3.svg"
          alt="shape"
        />
      </div>

    </div>
  );
}

export default Hero;
