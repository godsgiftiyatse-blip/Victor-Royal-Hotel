// MOBILE MENU
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");

  if (
    navLinks.style.display === "flex" ||
    navLinks.style.display === "block"
  ) {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
}

// COUNTER ANIMATION
function animateCounter(id, target, speed) {
  let count = 0;
  const element = document.getElementById(id);

  const update = () => {
    if (count < target) {
      count += Math.ceil(target / speed);

      if (count > target) {
        count = target;
      }

      element.textContent = count;
      setTimeout(update, 30);
    }
  };

  update();
}

window.addEventListener("load", () => {
  animateCounter("stat1", 120, 50);
  animateCounter("stat2", 80, 50);
  animateCounter("stat3", 5000, 80);
});

// BOOKING FORM
const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert(
      "Thank you for choosing Victor Royal Hotel & Suites. Your booking request has been received."
    );

    bookingForm.reset();
  });
}
