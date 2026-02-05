import { useTranslation } from "react-i18next";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/pagination";


function Testimonials() {

  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "ar";


  const testimonials = [
    {
      text: t("testimonials.items.item1"),
      name: "Md Sumon Mia",
      company: "Rimasu",
      image: "assets/img/testimonial/testi_4_1.jpg",
    },
    {
      text: t("testimonials.items.item2"),
      name: "David Farnandes",
      company: "Anaton",
      image: "assets/img/testimonial/testi_4_2.jpg",
    },
    {
      text: t("testimonials.items.item3"),
      name: "Abraham Khalil",
      company: "Kormola",
      image: "assets/img/testimonial/testi_4_3.jpg",
    },
    {
      text: t("testimonials.items.item4"),
      name: "Jackline Techie",
      company: "Anatora",
      image: "assets/img/testimonial/testi_4_4.jpg",
    },
  ];


  return (
    <section id="clients-sec">


      <div
        className="round-container"
        style={{
          backgroundImage: "url(assets/img/bg/testi_bg_4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >


        <div className="container align-content-center">


          <div className="testi-block-area">


            {/* ================= Title ================= */}
            <h2 className="sec-title text-center">

              <span className="text-theme">
                {t("testimonials.title")}
              </span>

            </h2>


            {/* ================= Slider ================= */}
            <Swiper
              key={isRTL ? "rtl" : "ltr"} // force rebuild on language change
              modules={[Autoplay, Pagination]}
              loop
              dir={isRTL ? "rtl" : "ltr"}
              rtl={isRTL}

              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}

              pagination={{
                el: ".slider-pagination",
                clickable: true,
              }}

              slidesPerView={1}
              spaceBetween={30}
              className="th-slider has-shadow testi-block-slide"
            >


              {testimonials.map((item, index) => (

                <SwiperSlide key={index}>

                  <div className="testi-block">


                    {/* Text */}
                    <p className="testi-block_text">
                      “{item.text}”
                    </p>


                    {/* Profile */}
                    <div className="testi-block_profile">

                      <div className="testi-block_avater">

                        <img
                          src={item.image}
                          alt={item.name}
                        />

                      </div>


                      <div className="media-body">

                        <h3 className="box-title">
                          {item.name}
                        </h3>

                        <p className="testi-block_desig">

                          {t("testimonials.roles.ceo")} {item.company}

                        </p>

                      </div>

                    </div>

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>


            {/* Pagination */}
            <div className="slider-pagination"></div>


            {/* Quote Icon */}
            <div className="testi-block-quote">

              <img
                src="assets/img/icon/quote_3d.png"
                alt="quote"
              />

            </div>


          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;
