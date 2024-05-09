const customDate = "13 december 2025 00:00 AM";

function clock() {
  let end = new Date(customDate);
  let now = new Date();
  const diff = (end - now) / 1000;

  let days = Math.floor(diff / 3600 / 24);
  let hours = Math.floor(diff / 3600) % 24;
  let minutes = Math.floor(diff / 60) % 60;
  let seconds = Math.floor(diff) % 60;

  if (diff < 0) {
    return;
  }

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

clock();

setInterval(() => {
  clock();
}, 1000);

const btn = document.querySelector("button.book-now__get-deal-btn");
btn.addEventListener("click", () => {
  const bookTripSection = document.getElementById("book-a-trip-section");
  bookTripSection.scrollIntoView({ behavior: "smooth" });
});
