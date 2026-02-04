import React from "react";

function Projects() {

  const projects = [
    {
      img: "/assets/img/project/mproject1.jpeg",
      title: "IT Consultency",
      category: "Technology",
    },
    {
      img: "/assets/img/project/mproject2.jpeg",
      title: "Web Development",
      category: "Technology",
    },
    {
      img: "/assets/img/project/mproject3.jpeg",
      title: "Website Design",
      category: "Technology",
    },
    {
      img: "/assets/img/project/mproject5.jpeg",
      title: "SEO Optimization",
      category: "Marketing",
    },
    {
      img: "/assets/img/project/mproject6.jpeg",
      title: "Digital Marketing",
      category: "Marketing",
    },
    {
      img: "/assets/img/project/mproject7.jpeg",
      title: "Business Analysis",
      category: "Business",
    },
    {
      img: "/assets/img/project/mproject8.jpeg",
      title: "Software Service",
      category: "Technology",
    },
    {
      img: "/assets/img/project/mproject4.jpeg",
      title: "Data Recovery",
      category: "Technology",
    },
    {
      img: "/assets/img/project/mproject9.jpeg",
      title: "Cloud Computing",
      category: "Technology",
    },
  ];


  return (
    <>


      {/* Section Title */}
      <div
        className="title-area text-center"
        id="selected-projects"
      >
        <h2 className="sec-title">

          Selected
          <span className="text-theme"> Projects!</span>

        </h2>
      </div>


      {/* Projects Section */}
      <section
        id="projects-sec"
        className="space"
      >

        <div className="container">

          <div className="row gy-4">


            {projects.map((project, index) => (

              <div
                key={index}
                className="col-lg-4 col-md-6"
              >

                <div className="project-card">


                  {/* Image */}
                  <div className="project-img">

                    <img
                      src={project.img}
                      alt={project.title}
                    />

                  </div>


                  {/* Content */}
                  <div className="project-content-wrap">

                    <div className="project-content">


                      {/* Particle (optional) */}
                      <div
                        className="box-particle"
                        id={`project-p${index + 1}`}
                      ></div>


                      <h3 className="box-title">

                        <a href="#">
                          {project.title}
                        </a>

                      </h3>


                      <p className="project-subtitle">
                        {project.category}
                      </p>


                      {/* Popup Button */}
                      <a
                        href={project.img}
                        className="icon-btn popup-image"
                      >

                        <i className="far fa-plus"></i>

                      </a>


                    </div>

                  </div>

                </div>

              </div>

            ))}


          </div>

        </div>


        {/* Decorative Shapes */}
        <div
          className="shape-mockup"
          data-top="0%"
          data-right="0%"
        >

          <img
            src="/assets/img/shape/tech_shape_1.png"
            alt="shape"
          />

        </div>


        <div
          className="shape-mockup"
          data-bottom="0%"
          data-left="0%"
        >

          <img
            src="/assets/img/shape/tech_shape_2.png"
            alt="shape"
          />

        </div>


      </section>

    </>
  );
}

export default Projects;