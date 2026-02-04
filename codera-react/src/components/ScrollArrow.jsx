import React, { useEffect, useState } from "react";

function ScrollTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(307.919);

  useEffect(() => {
    const pathLength = 307.919;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = scrollTop / docHeight;

      const draw = pathLength * (1 - scrollPercent);

      setProgress(draw);

      // Show button after 300px
      if (scrollTop > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-top ${show ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "stroke-dashoffset 10ms linear",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: progress,
          }}
        />
      </svg>
    </div>
  );
}

export default ScrollTop;
