const progress = document.getElementById("progress");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let active = 1;

next.addEventListener("click", () => {
  active++;

  if (active > circles.length) {
    active = circles.length;
  }
  //   console.log(active);
  update();
});

previous.addEventListener("click", () => {
  active--;

  if (active < 1) {
    active = 1;
  }
  //   console.log(active);
  update();
});

function update() {
  circles.forEach((circle, indx) => {
    if (indx < active) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (active === 1) {
    previous.disabled = true;
  } else if (active === circles.length) {
    next.disabled = true;
  } else {
    previous.disabled = false;
    next.disabled = false;
  }
}
