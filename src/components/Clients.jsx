import { useTranslation } from "react-i18next";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


function Clients() {

  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "ar";


  const brands = [
    "assets/img/project/brand10.jpeg",
    "assets/img/project/brand2.jpeg",
    "assets/img/project/brand30.jpeg",
    "assets/img/project/brand40.jpeg",
    "assets/img/project/brand50.jpeg",
    "assets/img/project/brand10.jpeg",
    "assets/img/project/brand2.jpeg",
    "assets/img/project/brand30.jpeg",
    "assets/img/project/brand40.jpeg",
    "assets/img/project/brand50.jpeg",
    "assets/img/project/brand10.jpeg",
    "assets/img/project/brand2.jpeg",
    "assets/img/project/brand30.jpeg",
  ];


  return (

    <div
      className="overflow-hidden space-top"
      id="faq-sec"
    >

      <div className="container space-bottom">


        {/* ================= Title ================= */}
        <h2 className="sec-title text-center">

          <span className="text-theme">
            {t("clients.title")}
          </span>

        </h2>


        {/* ================= Slider ================= */}
        <div className="slider-area text-center">

          <Swiper

            key={isRTL ? "rtl" : "ltr"} // force rebuild

            modules={[Autoplay]}

            loop

            dir={isRTL ? "rtl" : "ltr"}
            rtl={isRTL}

            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            spaceBetween={30}

            breakpoints={{

              0: {
                slidesPerView: 2,
              },

              576: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
              },

              992: {
                slidesPerView: 3,
              },

              1200: {
                slidesPerView: 4,
              },

              1400: {
                slidesPerView: 5,
              },

            }}

            className="th-slider"
          >


            {brands.map((brand, index) => (

              <SwiperSlide key={index}>

                <div className="brand-box">

                  <img
                    src={brand}
                    width="180"
                    alt="Brand Logo"
                  />

                </div>

              </SwiperSlide>

            ))}


          </Swiper>

        </div>

      </div>

    </div>

  );
}

export default Clients;