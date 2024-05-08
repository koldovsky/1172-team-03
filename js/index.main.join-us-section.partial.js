const btn = document.querySelector("button.join-us__btn");
console.log(btn);
btn.addEventListener("click", () => {
  const bookTripSection = document.getElementById("book-a-trip-section");
  bookTripSection.scrollIntoView({ behavior: "smooth" });
});
