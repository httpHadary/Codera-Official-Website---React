function Hero() {
  return (
    <div className="th-hero-wrapper hero-1" id="hero">

      {/* Hero Image */}
      <div className="hero-img tilt-active">
        <img
          src="/assets/img/hero/hero_img_1_1.png"
          alt="Hero"
        />
      </div>

      <div className="container">
        <div className="hero-style1">

          <span className="hero-subtitle">Codera</span>

          <h1 className="hero-title">
            Crafting solutions for tomorrow
          </h1>

          <h1 className="hero-title">
            For Smart{" "}
            <span className="text-theme fw-medium">
              IT Solution
            </span>
          </h1>

          <p className="hero-text">
            We build scalable, secure, and future-ready software
            solutions for modern businesses.
          </p>

          {/* Buttons */}
          <div className="btn-group">
            <a href="#about-sec" className="th-btn">
              ABOUT US 
              <i className="fa-regular fa-arrow-right ms-2"></i>
            </a>
          </div>

          <div className="btn-group">
            <a
              href="#contact-sec"
              className="th-btn m-3"
            >
              START YOUR PROJECT 
              <i className="fa-regular fa-arrow-right ms-2"></i>
            </a>
          </div>

        </div>
      </div>

      {/* Shapes */}
      <div className="hero-shape1">
        <img
          src="/assets/img/hero/hero_shape_1_1.svg"
          alt="shape"
        />
      </div>

      <div className="hero-shape2">
        <img
          src="/assets/img/hero/hero_shape_1_2.svg"
          alt="shape"
        />
      </div>

      <div className="hero-shape3">
        <img
          src="/assets/img/hero/hero_shape_1_3.svg"
          alt="shape"
        />
      </div>

    </div>
  );
}

export default Hero;
