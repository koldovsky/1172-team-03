const btn = document.querySelector("button.join-us__btn");
btn.addEventListener("click", () => {
  const bookTripSection = document.getElementById("book-a-trip-section");
  bookTripSection.scrollIntoView({ behavior: "smooth" });
});
