function init() {
  import("./index.header.partial.js");
  import("./index.main.our-sponsors-section.partial.js");
  import("./index.main.carousel-section.partial.js");
  import("./index.main.book-now-section.partial.js");
  import("./index.main.testimonials-carousel-section.partial.js");
  import("./index.main.join-us-section.partial.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]',
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
