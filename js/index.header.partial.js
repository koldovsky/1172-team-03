function playSound(e) {
  if (finalMusicsPlayed) return;

  const audio = document.querySelector(`audio[data-key=${e.code}]`);
  if (!audio) return;

  const keys = document.querySelectorAll(`.key[data-key=${e.code}]`);
  audio.volume = 0.5;
  audio.play();
  keys.forEach((key) => key.classList.add("playing"));

  if (allLettersWithPlayingClass()) {
    setTimeout(() => {
      finalMusicsPlayed = true;
      const finalMusicHtml = document.querySelector(".finalMusic");
      finalMusicHtml.volume = 0.4;
      finalMusicHtml.play();
    }, 2000);
  }
}

function allLettersWithPlayingClass() {
  const letters = document.querySelectorAll(`.header__keys .key`);
  return Array.from(letters).every((letter) =>
    letter.classList.contains("playing"),
  );
}

let finalMusicsPlayed = false;

window.addEventListener("keydown", playSound);
