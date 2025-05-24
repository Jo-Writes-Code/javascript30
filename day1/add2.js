window.addEventListener("keydown", function (e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!sound) return;

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
  sound.currentTime = 0;
  sound.play();
});

function removeTransition(e) {
  if (e.type === "transitionend") this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
console.log(keys);
keys.forEach((element) => {
  element.addEventListener("transitionend", removeTransition);
});
