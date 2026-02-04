(function () {
  const cursor = document.querySelector(".cursor");
  const cursor2 = document.querySelector(".cursor2");

  if (!cursor || !cursor2) return;

  let mouseX = 0;
  let mouseY = 0;
  let posX = 0;
  let posY = 0;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  function follow() {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;

    cursor2.style.left = posX + "px";
    cursor2.style.top = posY + "px";

    requestAnimationFrame(follow);
  }

  follow();

  // Hover effect
  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      cursor2.classList.add("hover");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      cursor2.classList.remove("hover");
    });
  });
})();
