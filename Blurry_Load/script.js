const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurry, 30);
function blurry() {
  load++;
}
