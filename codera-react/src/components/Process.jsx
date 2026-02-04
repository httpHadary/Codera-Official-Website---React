import React from "react";

function Process() {

  const steps = [
    {
      icon: "/assets/img/icon/process_box_1.png",
      title: "Select a project",
      text: "Continua scale empowered metrics with cost effective innovation.",
    },
    {
      icon: "/assets/img/icon/process_box_2.png",
      title: "Project analysis",
      text: "Continua scale empowered metrics with cost effective innovation.",
    },
    {
      icon: "/assets/img/icon/process_box_3.png",
      title: "Plan Execute",
      text: "Continua scale empowered metrics with cost effective innovation.",
    },
    {
      icon: "/assets/img/icon/process_box_4.png",
      title: "Deliver result",
      text: "Continua scale empowered metrics with cost effective innovation.",
    },
  ];


  return (
    <section className="space" id="process-sec">

      <div className="container">


        {/* ================= Title ================= */}
        <div className="title-area text-center">

          <span className="sub-title">
            WORK PROCESS
          </span>

          <h2 className="sec-title">
            How to work{" "}
            <span className="text-theme">
              it!
            </span>
          </h2>

        </div>


        {/* ================= Process Area ================= */}
        <div className="process-card-area">


          {/* Line */}
          <div className="process-line position-top">

            <img
              src="/assets/img/bg/process_line_2.svg"
              alt="line"
            />

          </div>


          {/* Cards */}
          <div className="row gy-40 justify-content-between">

            {steps.map((step, index) => (

              <div
                key={index}
                className="col-sm-6 col-xl-auto process-card-wrap"
              >

                <div className="process-card">

                  {/* Pulse Animation */}
                  <div className="pulse"></div>


                  {/* Icon */}
                  <div className="process-card_icon">

                    <img
                      src={step.icon}
                      alt="icon"
                    />

                  </div>


                  {/* Title */}
                  <h2 className="box-title">
                    {step.title}
                  </h2>


                  {/* Text */}
                  <p className="process-card_text">
                    {step.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Process;