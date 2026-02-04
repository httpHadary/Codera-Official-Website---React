import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {

  const testimonials = [
    {
      text: "Completely drive innovative value whereas out-of-the-box paradigms. Interactively pursue stand-alone markets after global results. Globally plagiarize intermandated opportunities with. Progressively leverage others multifunctional methods.",
      name: "Md Sumon Mia",
      role: "CEO at Rimasu",
      image: "/assets/img/testimonial/testi_4_1.jpg",
    },
    {
      text: "Completely drive innovative value whereas out-of-the-box paradigms. Interactively pursue stand-alone markets after global results. Globally plagiarize intermandated opportunities with. Progressively leverage others multifunctional methods.",
      name: "David Farnandes",
      role: "CEO at Anaton",
      image: "/assets/img/testimonial/testi_4_2.jpg",
    },
    {
      text: "Completely drive innovative value whereas out-of-the-box paradigms. Interactively pursue stand-alone markets after global results. Globally plagiarize intermandated opportunities with. Progressively leverage others multifunctional methods.",
      name: "Abraham Khalil",
      role: "CEO at Kormola",
      image: "/assets/img/testimonial/testi_4_3.jpg",
    },
    {
      text: "Completely drive innovative value whereas out-of-the-box paradigms. Interactively pursue stand-alone markets after global results. Globally plagiarize intermandated opportunities with. Progressively leverage others multifunctional methods.",
      name: "Jackline Techie",
      role: "CEO at Anatora",
      image: "/assets/img/testimonial/testi_4_4.jpg",
    },
  ];


  return (
    <section id="clients-sec">


      <div
        className="round-container"
        style={{
          backgroundImage: "url(/assets/img/bg/testi_bg_4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >


        <div className="container align-content-center">


          <div className="testi-block-area">


            {/* ================= Title ================= */}
            <h2 className="sec-title text-center">

              <span className="text-theme">
                Our Testimonials !
              </span>

            </h2>


            {/* ================= Slider ================= */}
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}

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
                          {item.role}
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
                src="/assets/img/icon/quote_3d.png"
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