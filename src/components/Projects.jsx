import { useTranslation } from "react-i18next";

function Projects() {

  const { t } = useTranslation();


  const projects = [
    {
      img: "assets/img/project/mproject1.jpeg",
      title: t("projects.items.p1"),
      category: t("projects.categories.technology"),
    },
    {
      img: "assets/img/project/mproject2.jpeg",
      title: t("projects.items.p2"),
      category: t("projects.categories.technology"),
    },
    {
      img: "assets/img/project/mproject3.jpeg",
      title: t("projects.items.p3"),
      category: t("projects.categories.technology"),
    },
    {
      img: "assets/img/project/mproject5.jpeg",
      title: t("projects.items.p4"),
      category: t("projects.categories.marketing"),
    },
    {
      img: "assets/img/project/mproject6.jpeg",
      title: t("projects.items.p5"),
      category: t("projects.categories.marketing"),
    },
    {
      img: "assets/img/project/mproject7.jpeg",
      title: t("projects.items.p6"),
      category: t("projects.categories.business"),
    },
    {
      img: "assets/img/project/mproject8.jpeg",
      title: t("projects.items.p7"),
      category: t("projects.categories.technology"),
    },
    {
      img: "assets/img/project/mproject4.jpeg",
      title: t("projects.items.p8"),
      category: t("projects.categories.technology"),
    },
    {
      img: "assets/img/project/mproject9.jpeg",
      title: t("projects.items.p9"),
      category: t("projects.categories.technology"),
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

          {t("projects.title_part1")}{" "}

            <span className="text-theme">
              {t("projects.title_highlight")}
            </span>

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


                      {/* Particle */}
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
            src="assets/img/shape/tech_shape_1.png"
            alt="shape"
          />

        </div>


        <div
          className="shape-mockup"
          data-bottom="0%"
          data-left="0%"
        >

          <img
            src="assets/img/shape/tech_shape_2.png"
            alt="shape"
          />

        </div>


      </section>

    </>
  );
}

export default Projects;
