import { useTranslation } from "react-i18next";

function WhyUs() {

  const { t } = useTranslation();


  return (
    <section id="why-sec">

      <div className="container space">

        <div className="row align-items-center flex-row-reverse">


          {/* ================= Image Side ================= */}
          <div className="col-lg-6 mb-30 mb-lg-0">

            <div className="img-box7">

              <div className="img1">
                <img
                  src="/assets/img/normal/why_3_1.png"
                  alt="Why Choose Us"
                />
              </div>

              <div className="shape1">
                <img
                  src="/assets/img/normal/why_3_2.png"
                  alt="Shape"
                />
              </div>

              <div className="shape2">
                <img
                  src="/assets/img/normal/why_3_3.png"
                  alt="Shape"
                />
              </div>

              <div className="color-animate"></div>

            </div>

          </div>


          {/* ================= Content Side ================= */}
          <div className="col-lg-6 text-lg-start text-center">


            {/* Title */}
            <div className="title-area mb-35">

              <span className="sub-title">
                {t("why.subtitle")}
              </span>

              <h2 className="sec-title">
                {t("why.title")}
              </h2>

            </div>


            {/* Description */}
            <p className="mt-n2 mb-30">
              {t("why.description")}
            </p>


            {/* ================= Checklist ================= */}
            <div className="two-column mb-40 list-center">


              {/* Column 1 */}
              <div className="checklist style2">

                <ul>

                  <li>
                    <img
                      src="/assets/img/icon/check_1.png"
                      alt="icon"
                    />
                    {t("why.list.item1")}
                  </li>

                  <li>
                    <img
                      src="/assets/img/icon/check_1.png"
                      alt="icon"
                    />
                    {t("why.list.item2")}
                  </li>

                </ul>

              </div>


              {/* Column 2 */}
              <div className="checklist style2">

                <ul>

                  <li>
                    <img
                      src="/assets/img/icon/check_1.png"
                      alt="icon"
                    />
                    {t("why.list.item3")}
                  </li>

                  <li>
                    <img
                      src="/assets/img/icon/check_1.png"
                      alt="icon"
                    />
                    {t("why.list.item4")}
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= Background Particle ================= */}
      <div
        className="shape-mockup"
        data-bottom="0"
        data-right="0"
      >
        <div className="particle-3" id="particle-4"></div>
      </div>

    </section>
  );
}

export default WhyUs;
