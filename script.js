/* =====================================
   VICTOR ROYAL HOTEL V8 - SCRIPT
===================================== */

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

// CLOSE MENU WHEN LINK IS CLICKED
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        const navLinks = document.getElementById("navLinks");

        if (window.innerWidth <= 768) {
            navLinks.style.display = "none";
        }
    });
});

/* =====================================
   ANIMATED COUNTERS
===================================== */

function animateCounter(id, target, duration = 2000) {

    const element = document.getElementById(id);

    if (!element) return;

    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {

        start += increment;

        if (start < target) {

            element.textContent = Math.floor(start);

            requestAnimationFrame(updateCounter);

        } else {

            element.textContent = target.toLocaleString();
        }
    }

    updateCounter();
}

// START COUNTERS WHEN PAGE LOADS
window.addEventListener("load", () => {

    animateCounter("roomsCount", 120);

    animateCounter("staffCount", 85);

    animateCounter("guestCount", 5000);

});

/* =====================================
   BOOKING FORM
===================================== */

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert(
            "Thank you for choosing Victor Royal Hotel & Suites. Your booking request has been received."
        );

        bookingForm.reset();

    });

}

/* =====================================
   REVEAL ON SCROLL
===================================== */

const revealElements = document.querySelectorAll(
    ".room-card, .service, .stat, .testimonial, .gallery-grid img"
);

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }
    });
}

// INITIAL STYLES
revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/* =====================================
   STICKY NAVBAR SHADOW
===================================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 25px rgba(0,0,0,0.15)";

    } else {

        navbar.style.boxShadow = "none";
    }

});

/* =====================================
   GALLERY IMAGE HOVER EFFECT
===================================== */

const galleryImages =
    document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/* =====================================
   WHATSAPP BUTTON
===================================== */

const whatsappBtn =
    document.querySelector(".whatsapp");

if (whatsappBtn) {

    whatsappBtn.href =
        "https://wa.me/2348000000000";

                       }
