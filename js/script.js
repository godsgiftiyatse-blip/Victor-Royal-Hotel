// =======================================
// STARLIGHT ACADEMY V5 SCRIPT
// =======================================

// MOBILE MENU

document.addEventListener("DOMContentLoaded", function(){

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if(menuBtn && navLinks){

        menuBtn.addEventListener("click", function(){

            navLinks.classList.toggle("active");

        });

    }

});

// ANIMATED COUNTERS

function animateCounter(id, target){

    const counter = document.getElementById(id);

    if(!counter) return;

    let count = 0;

    const speed = target / 100;

    function update(){

        if(count < target){

            count += speed;

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        }else{

            counter.innerText = target + "+";

        }

    }

    update();

}

animateCounter("students-count", 1200);
animateCounter("teachers-count", 85);
animateCounter("graduates-count", 3500);
animateCounter("experience-count", 15);

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
".card, .facility-card, .stat-card, .testimonial-card"
);

function revealOnScroll(){

    revealElements.forEach(function(element){

        const elementTop =
        element.getBoundingClientRect().top;

        const screenHeight =
        window.innerHeight;

        if(elementTop < screenHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(function(element){

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// AUTO FOOTER YEAR

const copyright =
document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =
    `© ${new Date().getFullYear()} Starlight Academy. All Rights Reserved.`;

}
