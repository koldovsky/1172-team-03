const imageWrapper = document.querySelector(".image-wrapper");
const imageItems = document.querySelectorAll(".image-wrapper > *");
const imageLength = imageItems.length;
const delay = 3000;
let totalScroll = 0;

setElementsCount();
window.addEventListener("resize", setElementsCount);

let autoScroll = setInterval(scrolling, delay);

function setElementsCount() {
  const screenWidth = window.innerWidth;
  let elementsCount;

  if (screenWidth >= 991) {
    elementsCount = 5;
  } else if (screenWidth >= 767) {
    elementsCount = 3;
  } else if (screenWidth >= 479) {
    elementsCount = 2;
  } else {
    elementsCount = 1;
  }

  imageWrapper.style.setProperty("--per-view", elementsCount);

  for (let i = 0; i < elementsCount; i++) {
    imageWrapper.insertAdjacentHTML(
      "beforeend",
      imageItems[i % imageLength].outerHTML
    );
  }
}

function scrolling() {
  totalScroll++;
  if (totalScroll > imageLength) {
    clearInterval(autoScroll);
    totalScroll = 1;
    imageWrapper.style.transition = "0s";
    imageWrapper.style.left = "0";
    autoScroll = setInterval(scrolling, delay);
  }
  const widthEl = document.querySelector(".image-wrapper > :first-child").offsetWidth + 25;
  imageWrapper.style.left = `-${totalScroll * widthEl}px`;
  imageWrapper.style.transition = ".3s";
}
