const Carte = document.querySelectorAll(".Carte");

Carte.forEach((Carte) => {
// const wrap = document.querySelector(".DevantCarte");
let w = Carte.clientWidth;
let h = Carte.clientHeight;
let b = Carte.getBoundingClientRect();

Carte.addEventListener("mousemove", (e) => {
  let X = (e.clientX - b.left + window.scrollX) / w;
  let Y = (e.clientY - b.top + window.scrollY) / h;

  let rX = -(X - 0.5) * 30;
  let rY = (Y - 0.5) * 30;

  let bgX = 40 + 20 * X;
  let bgY = 40 + 20 * Y;

  console.log(rX ,rY);

  Carte.style.setProperty("--o", 1);

  Carte.style.setProperty("--mx", 100 * X + "%");
  Carte.style.setProperty("--my", 100 * Y + "%");

  Carte.style.setProperty("--posx", bgX + "%");
  Carte.style.setProperty("--posy", bgY + "%");

  Carte.style.setProperty("--rx", rX + "deg");
  Carte.style.setProperty("--ry", rY + "deg");

  Carte.style.setProperty("--index", 99)

});
  Carte.addEventListener("mouseleave", () => {

    Carte.style.setProperty("--o", 0);
    Carte.style.setProperty("--rx", "0deg");
    Carte.style.setProperty("--ry", "0deg");
    Carte.style.setProperty("--posx", "50%");
    Carte.style.setProperty("--posy", "50%");
    Carte.style.setProperty("--index", 0)
    });
});