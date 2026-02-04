import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Counter
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import "swiper/css";

function AnimatedCounter({ value }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <span ref={ref} className="counter-number">
      {inView && <CountUp end={value} duration={2.5} />}
    </span>
  );
}

function Services() {
  const counters = [
    {
      icon: "/assets/img/icon/counter_2_1.png",
      number: 986,
      text: "Finished Project",
    },
    {
      icon: "/assets/img/icon/counter_2_2.png",
      number: 896,
      text: "Happy Clients",
    },
    {
      icon: "/assets/img/icon/counter_2_3.png",
      number: 396,
      text: "Skilled Experts",
    },
    {
      icon: "/assets/img/icon/counter_2_4.png",
      number: 496,
      text: "Honorable Awards",
    },
  ];

  const services = [
    {
      icon: "/assets/img/icon/service_3d_1.png",
      title: "Web Development",
    },
    {
      icon: "/assets/img/icon/service_3d_2.png",
      title: "UI/UX Design",
    },
    {
      icon: "/assets/img/icon/service_3d_3.png",
      title: "Digital Marketing",
    },
    {
      icon: "/assets/img/icon/service_3d_4.png",
      title: "Business Analysis",
    },
  ];

  return (
    <section id="service-sec">
      <div className="round-container gr-bg3 space">
        <div className="container">

          <div className="row gy-40 justify-content-between space-bottom">

            {counters.map((item, index) => (
              <div key={index} className="col-6 col-lg-auto">

                <div className="counter-card">

                  <div className="icon">
                    <img src={item.icon} alt="Icon" />
                  </div>

                  <div className="media-body">

                    <h2 className="counter-card_number text-title">
                      <AnimatedCounter value={item.number} />+
                    </h2>

                    <p className="counter-card_text text-body">
                      {item.text}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>


          <div className="title-area text-center">

            <span className="sub-title">OUR SERVICES</span>

            <h2 className="sec-title">
              We Provide Exclusive Services
            </h2>

          </div>

          <div className="slider-area">

            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
            >

              {services.concat(services).map((service, index) => (
                <SwiperSlide key={index}>

                  <div className="service-3d">

                    <div className="service-3d_icon">
                      <img src={service.icon} alt="Icon" />
                    </div>

                    <div className="service-3d_content">

                      <h3 className="box-title">
                        <a href="#">
                          {service.title}
                        </a>
                      </h3>

                      <p className="service-3d_text">
                        Intrinsicly redefine competitive e-business before
                        adaptive potentialiti. Professionally build progressive
                        users with.
                      </p>

                    </div>

                  </div>

                </SwiperSlide>
              ))}

            </Swiper>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
