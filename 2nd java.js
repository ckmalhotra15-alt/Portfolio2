// ================================
// Portfolio Script
// ================================

// Mobile Navigation
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// ================================
// Sticky Navbar
// ================================

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 40) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================================
// Typing Effect
// ================================

const typingElement = document.querySelector(".hero-text h2");

const words = [
    "AI Enthusiast",
    "Data Analytics Learner",
    "Software Developer",
    "B.Tech ECE Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    let currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();

// ================================
// Scroll Reveal Animation
// ================================

const revealElements = document.querySelectorAll(
".card,.project-card,.certificate,.skill-box,.about,.hero-text,.hero-image");

function reveal() {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// ================================
// Contact Form Validation
// ================================

const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_g9m35ea",
            "template_k7pqo0k",
            this
        )
        .then(() => {
            alert("✅ Message sent successfully!");
            form.reset();
        })
        .catch((error) => {
            console.error(error);
            alert("❌ Failed to send message.");
        });
    });
}

// ================================
// Back To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#00bfff";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="20px";
topBtn.style.boxShadow="0 0 15px rgba(0,191,255,.4)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if(href === "#"){
            return;
        }

        e.preventDefault();

        const target = document.querySelector(href);

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});