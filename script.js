// =====================================
// VICTOR ROYAL HOTEL V5 JAVASCRIPT
// =====================================


// ==============================
// PAGE FADE-IN EFFECT
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
        "opacity 1s ease";

        document.body.style.opacity = "1";

    }, 100);

});


// ==============================
// MOBILE MENU
// ==============================

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        if(navLinks.style.display === "flex"){

            navLinks.style.display = "none";

        }else{

            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "column";
            navLinks.style.position = "absolute";
            navLinks.style.top = "80px";
            navLinks.style.right = "20px";
            navLinks.style.background = "#ffffff";
            navLinks.style.padding = "20px";
            navLinks.style.borderRadius = "12px";
            navLinks.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.15)";
            navLinks.style.zIndex = "999";

        }

    });

}


// ==============================
// ACTIVE NAVIGATION
// ==============================

const currentPage =
window.location.pathname.split("/").pop();

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    if(link.getAttribute("href")
    === currentPage){

        link.style.color = "#c59d5f";
        link.style.fontWeight = "700";

    }

});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements =
document.querySelectorAll(
".card, .facility-card, .testimonial-card, .stat-card"
);

function revealOnScroll(){

    revealElements.forEach(element => {

        const elementTop =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform =
            "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "all .8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// ==============================
// COUNTER ANIMATION
// ==============================

function animateCounter(id, target){

    const element =
    document.getElementById(id);

    if(!element) return;

    let count = 0;

    const increment =
    target / 120;

    function update(){

        if(count < target){

            count += increment;

            element.innerText =
            Math.floor(count);

            requestAnimationFrame(update);

        }else{

            element.innerText =
            target + "+";

        }

    }

    update();

}

animateCounter(
"rooms-count",
120
);

animateCounter(
"guest-count",
5000
);

animateCounter(
"staff-count",
75
);

animateCounter(
"experience-count",
10
);


// ==============================
// BACK TO TOP BUTTON
// ==============================

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.bottom = "90px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#c59d5f";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ==============================
// BUTTON CLICK EFFECT
// ==============================

document
.querySelectorAll(".btn")
.forEach(button => {

    button.addEventListener(
    "click",
    () => {

        button.style.transform =
        "scale(.95)";

        setTimeout(() => {

            button.style.transform =
            "scale(1)";

        },150);

    });

});


// ==============================
// IMAGE HOVER EFFECT
// ==============================

document
.querySelectorAll(".card img")
.forEach(image => {

    image.addEventListener(
    "mouseenter",
    () => {

        image.style.transform =
        "scale(1.05)";

        image.style.transition =
        ".5s";

    });

    image.addEventListener(
    "mouseleave",
    () => {

        image.style.transform =
        "scale(1)";

    });

});


// ==============================
// FOOTER YEAR
// ==============================

const yearElement =
document.querySelector(".copyright");

if(yearElement){

    yearElement.innerHTML =
    `© ${new Date().getFullYear()} Victor Royal Hotel & Suites. All Rights Reserved.`;

}


// ==============================
// HERO TEXT ANIMATION
// ==============================

const heroContent =
document.querySelector(".hero-content");

if(heroContent){

    heroContent.style.opacity = "0";
    heroContent.style.transform =
    "translateY(30px)";

    setTimeout(() => {

        heroContent.style.transition =
        "all 1s ease";

        heroContent.style.opacity = "1";

        heroContent.style.transform =
        "translateY(0)";

    },500);

}


// ==============================
// END OF FILE
// ==============================
