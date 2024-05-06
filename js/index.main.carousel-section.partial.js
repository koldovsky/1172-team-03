const images = [
  "classes-slide-1.jpg",
  "classes-slide-2.jpg",
  "classes-slide-3.jpg",
  "classes-slide-4.jpg",
];
const imagePath = "./image/main.carousel/";
let activeImage = 0;
const sliderPlace = document.querySelector(".slider-line");

const generateImage = (imageName) => {
  const img = document.createElement("img");
  img.alt = "";
  img.src = imagePath + imageName;
  return img;
};

const initSlider = () => {
  sliderPlace.appendChild(generateImage(images[activeImage]));
  nextImageGenerate();
  prewImageGenerate();
};

const nextImageGenerate = () => {
  let nextImageIndex = (activeImage + 1) % images.length;
  sliderPlace.appendChild(generateImage(images[nextImageIndex]));
};

const prewImageGenerate = () => {
  let prewImageIndex = (activeImage - 1 + images.length) % images.length;
  sliderPlace.prepend(generateImage(images[prewImageIndex]));
};

const nextSlide = () => {
  activeImage = (activeImage + 1) % images.length;
  document.querySelector(".slider-line img").remove();
  nextImageGenerate();
};

const prewSlide = () => {
  activeImage = (activeImage - 1 + images.length) % images.length;
  document.querySelector(".slider-line img:last-child").remove();
  prewImageGenerate();
};

initSlider();

const leftArrow = document.querySelector(".our-guides__left-arrow");
const rightArrow = document.querySelector(".our-guides__right-arrow");

leftArrow.addEventListener("click", prewSlide);
rightArrow.addEventListener("click", nextSlide);
