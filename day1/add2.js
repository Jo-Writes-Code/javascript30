window.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!sound) return;

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.toggle("playing");
  console.log(key);
  sound.currentTime = 0;
  sound.play();
});

function removeTransition(e) {
  // if (e.propertyName !== "transform") return;
  // this.classList.remove("playing");
  e.type === "transitionend" && this.classList.remove("playing");
}

const key = document.querySelectorAll(".key");
key.forEach((element) => {
  element.addEventListener("transitionend", removeTransition);
});
