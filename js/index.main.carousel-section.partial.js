let currentSlideIndex = 0;
let visibleSlides = 1;

const leftArrow = document.querySelector(".our-guides__left-arrow");
const rightArrow = document.querySelector(".our-guides__right-arrow");
const carousel = document.querySelector(".our-guides__carusel");

function updateCarousel() {
  const slideWidth = carousel.children[0].offsetWidth;
  const offset = -slideWidth * currentSlideIndex;
  carousel.style.transform = `translateX(${offset}px)`;
}

function updateVisibleSlides() {
  if (window.innerWidth <= 600) {
    visibleSlides = 1;
  } else if (window.innerWidth <= 900) {
    visibleSlides = 2;
  } else {
    visibleSlides = 3;
  }
  updateCarousel();
}

rightArrow.addEventListener("click", function (event) {
  event.preventDefault();
  currentSlideIndex += visibleSlides;
  if (currentSlideIndex >= carousel.children.length) {
    currentSlideIndex = 0;
  }
  updateCarousel();
});

leftArrow.addEventListener("click", function (event) {
  event.preventDefault();
  currentSlideIndex -= visibleSlides;
  if (currentSlideIndex < 0) {
    currentSlideIndex = Math.max(carousel.children.length - visibleSlides, 0);
  }
  updateCarousel();
});

updateVisibleSlides();

window.addEventListener("resize", updateVisibleSlides);
