import { useTranslation } from "react-i18next";

function About() {

  const { t } = useTranslation();


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

                <span className="sub-title">
                  {t("about.subtitle")}
                </span>

                <h2 className="sec-title">
                  {t("about.title")}
                </h2>

              </div>


              {/* Text */}
              <p className="mt-n2 mb-25">
                {t("about.description")}
              </p>


              {/* Checklist */}
              <div className="checklist style4 mb-40 list-center">
                <ul>

                  <li>
                    <img
                      src="/assets/img/icon/check_1.png"
                      alt="icon"
                    />
                    {t("about.list.item1")}
                  </li>

                  <li>
                    <img
                      src="/assets/img/icon/check_1.png"
                      alt="icon"
                    />
                    {t("about.list.item2")}
                  </li>

                  <li>
                    <img
                      src="/assets/img/icon/check_1.png"
                      alt="icon"
                    />
                    {t("about.list.item3")}
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
              {t("about.visionSubtitle")}
            </span>

            <h2 className="sec-title">
              {t("about.visionTitle")}
            </h2>

            <h3 className="sec-title">
              {t("about.missionTitle")}
            </h3>

          </div>

        </div>
      </div>

    </section>
  );
}

export default About;
