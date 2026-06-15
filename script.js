// ===================================
// STARLIGHT ACADEMY V5 SCRIPT
// ===================================

// MOBILE MENU

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if(menuBtn && navLinks){

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }

});

// COUNTERS

function animateCounter(id, target){

    const element = document.getElementById(id);

    if(!element) return;

    let count = 0;

    const increment = target / 100;

    function update(){

        if(count < target){

            count += increment;

            element.innerText = Math.floor(count);

            requestAnimationFrame(update);

        }else{

            element.innerText = target + "+";

        }

    }

    update();

}

animateCounter("students-count",1200);
animateCounter("teachers-count",85);
animateCounter("graduates-count",3500);
animateCounter("experience-count",15);


// SCROLL ANIMATIONS

const cards = document.querySelectorAll(
".card, .facility-card, .testimonial-card, .stat-card"
);

function revealCards(){

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealCards);

revealCards();


// FOOTER YEAR

const copyright =
document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =
    `© ${new Date().getFullYear()} Starlight Academy. All Rights Reserved.`;

}
