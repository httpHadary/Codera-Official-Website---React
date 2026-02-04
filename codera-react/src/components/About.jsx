import React from "react";

function About() {
  return (
    <section className="about-sec-v4 space-bottom" id="about-sec">

      {/* About Codera */}
      <div className="container space-top">
        <div className="row align-items-center">

          {/* Images */}
          <div className="col-lg-5 mb-30 mb-lg-0">
            <div className="img-box6">

              <div className="img1">
                <img
                  src="/assets/img/normal/about_4_1.png"
                  alt="About"
                />
              </div>

              <div className="shape1">
                <img
                  src="/assets/img/normal/about_4_2.png"
                  alt="About"
                />
              </div>

              <div className="shape2">
                <img
                  src="/assets/img/normal/about_4_3.png"
                  alt="About"
                />
              </div>

              <div className="color-animate"></div>

            </div>
          </div>


          {/* Content */}
          <div className="col-lg-7 text-lg-start text-center">
            <div className="ps-xxl-5">

              {/* Title */}
              <div className="title-area mb-35">
                <span className="sub-title">About Codera</span>

                <h2 className="sec-title">
                  We've Been Thriving for 25 Years.
                </h2>
              </div>


              {/* Text */}
              <p className="mt-n2 mb-25">
                Codera is a software development company focused on building
                high-quality digital solutions that combine clean code with
                a future-oriented mindset. We help businesses turn ideas into
                reliable systems and applications designed for long-term
                success.
              </p>


              {/* Checklist */}
              <div className="checklist style4 mb-40 list-center">
                <ul>

                  <li>
                    <img
                      src="/assets/img/icon/check_1.png"
                      alt="icon"
                    />
                    Dramatically re-engineer value added IT systems via mission
                  </li>

                  <li>
                    <img
                      src="/assets/img/icon/check_1.png"
                      alt="icon"
                    />
                    Website & Mobile application design & Development
                  </li>

                  <li>
                    <img
                      src="/assets/img/icon/check_1.png"
                      alt="icon"
                    />
                    Professional User Experince & Interface researching
                  </li>

                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>


      {/* Vision & Mission */}
      <div className="about-vision">
        <div className="container">

          <div className="title-area text-center">

            <span className="sub-title">
              Vision & Mission
            </span>

            <h2 className="sec-title">
              To become a trusted technology partner driving businesses toward a smarter digital future.
            </h2>

            <h3 className="sec-title">
              Deliver high-quality software solutions that create real value through innovation and precision.
            </h3>

          </div>

        </div>
      </div>

    </section>
  );
}

export default About;