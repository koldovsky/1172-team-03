const body = document.querySelector("body");
const header = document.querySelector(".header");

const slides = [
  '<div class="testimonials__client">' +
    '<div class="client__image client__image-1"></div>' +
    '<h3 class="client__name">Michael Crabs</h3>' +
    '<p class="client__text">' +
    "\"I've traveled to many resorts around the world in search of the best fishing experience and eventually, I've found it. This is a PagleWaters Fishing Club & Resort. Besides the amazing beauty around you, their services are thoroughly thought-out. You can fish alone or with an instructor. I've experienced an incredible fishing with my family. Their chef has cooked the most delicious meals from the fish we caught every evening. Highly recommend this resort to everyone!\"" +
    "</p>" +
    "</div>",

  '<div class="testimonials__client">' +
    '<div class="client__image client__image-2"></div>' +
    '<h3 class="client__name">Scott Ridley</h3>' +
    '<p class="client__text">' +
    "“We have got a second to none service from Jack and his crew throughout our stay at this Resort. All the stay was extremely enjoyable and all our needs were fully satisfied. They provided 5-star hospitality and the meals at the restaurant were just fantastic. The accommodation was clean and comfortable, with the amazing ocean view. Much thanks for the great time!”" +
    "</p>" +
    "</div>",

  '<div class="testimonials__client">' +
    '<div class="client__image client__image-3"></div>' +
    '<h3 class="client__name">Garry Norris</h3>' +
    '<p class="client__text">' +
    "“PagleWaters Club & Resort fully exceeded my expectations in everything they did. The fishing was just fantastic and unforgettable thanks to Captain Jack. The meals at the restaurant were like masterpieces thanks to Chef Anthony. I am still feeling that special taste of the last seafood meal. All the team was very friendly, welcoming, and extremely attentive to each client. Thanks for a good rest and memorable fishing adventure! I will definitely come back!”" +
    "</p>" +
    "</div>",
];

const dotsNav = document.querySelector(".testimonials__carousel-dots");
const dots = Array.from(dotsNav.children);

let currentSlideIdx = 0;

function renderSlide() {
  adjustClientsMinHeight();

  const slideContainer = document.querySelector(".testimonials__clients");
  slideContainer.innerHTML = slides[currentSlideIdx];

  dots.forEach((dot) => dot.classList.remove("active"));

  if (dots[currentSlideIdx]) {
    dots[currentSlideIdx].classList.add("active");
  }
}

function nextSlide() {
  currentSlideIdx =
    currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
  renderSlide();
}

function prevSlide() {
  currentSlideIdx =
    currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
  renderSlide();
}

renderSlide();

const nextBtn = document.querySelector(".testimonials__button-next");
nextBtn.addEventListener("click", nextSlide);

const prevBtn = document.querySelector(".testimonials__button-prev");
prevBtn.addEventListener("click", prevSlide);

window.addEventListener("resize", adjustClientsMinHeight());

function adjustClientsMinHeight() {
  const testimonialsClients = document.querySelector(".testimonials__clients");
  const testimonialsContainer = document.querySelector(
    ".testimonials__container",
  );

  const clientElements = document.querySelectorAll(".testimonials__client");
  let maxClientHeight = 0;

  clientElements.forEach((client) => {
    const clientHeight = client.offsetHeight;
    if (clientHeight > maxClientHeight) {
      maxClientHeight = clientHeight;
    }
  });

  testimonialsClients.style.minHeight = `${maxClientHeight}px`;

  const otherHeights =
    testimonialsContainer.clientHeight - testimonialsClients.offsetHeight;

  testimonialsContainer.style.minHeight = `${maxClientHeight + otherHeights}px`;
}

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("span");

  if (!targetDot) return;

  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  currentSlideIdx = targetIndex;

  renderSlide();
});

onload = function () {
  setBtnSize();
};

window.onresize = function () {
  setBtnSize();
};

function setBtnSize() {
  const width = window.innerWidth;
  const btn = document.querySelector(".testimonials__footer > button");

  if (width < 290) {
    btn.classList.add("button_sm");
    btn.classList.remove("button_md");
  } else {
    btn.classList.add("button_md");
    btn.classList.remove("button_sm");
  }

  if (width > 990) {
    body.classList.remove("overflow-hidden");
    header.classList.remove("nav-visible");
  }
}
