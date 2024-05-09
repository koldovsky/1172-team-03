const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header__nav");

let finalMusicsPlayed = false;

window.addEventListener("keydown", playSound);

btnSub.addEventListener("click", () => {
  body.classList.toggle("overflow-hidden");
  header.classList.toggle("nav-visible");
});

navLinks.addEventListener("click", () => {
  body.classList.remove("overflow-hidden");
  header.classList.remove("nav-visible");
});

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

onload = function () {
  changeNavVisible();
};

window.onresize = function () {
  changeNavVisible();
};

function changeNavVisible() {
  const width = window.innerWidth;

  if (width > 990) {
    body.classList.remove("overflow-hidden");
    header.classList.remove("nav-visible");
  }
}
