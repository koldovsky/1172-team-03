function playSound(e) {
  const audio = document.querySelector(`audio[data-key=${e.code}]`);
  const key = document.querySelectorAll(`.key[data-key=${e.code}]`);

  if (!audio) return;

  audio.volume = 0.5;
  audio.play();
  key.forEach((element) => element.classList.add("playing"));
}

window.addEventListener("keydown", playSound);
