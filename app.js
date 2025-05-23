// function togglePress() {
//   console.log('toggle')
//   document.querySelector(".key").classList.toggle("playing");
//   console.log(document.querySelector('.key').classList)
// }

window.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyDown = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  console.log(keyDown);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  keyDown.classList.toggle("playing");
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove('playing')
}

const key = document.querySelectorAll(".key");
key.forEach((element) =>
  element.addEventListener("transitionend", removeTransition)
);
