let tele = document.querySelector("#television");
let autoplay = document.querySelector("#hover-video");

let audio = document.querySelector("#old-radio");
let autoplayRadio = document.querySelector("#celestino");

tele.addEventListener("mouseenter", () => {
  autoplay.play();
});
tele.addEventListener("mouseout", () => {
  autoplay.pause();
});

audio.addEventListener("mouseenter", () => {
  autoplayRadio.play();
});
audio.addEventListener("mouseout", () => {
  autoplayRadio.pause();
});
