// ==========================
// Particles.js Background
// ==========================
particlesJS("particles-js", {
  particles: {
    number: {
      value: window.innerWidth < 768 ? 60 : 110,
      density: { enable: true, value_area: 800 }
    },
    color: {
      value: ["#f5f5f5", "#ffb6c1", "#f8bbd0", "#e91e63"]
    },
    shape: { type: "circle" },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.25,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 160,
      color: "#e91e63",
      opacity: 0.4,
      width: 0.6
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "bounce",
      bounce: true
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: ["grab", "bubble"] },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 180, line_linked: { opacity: 0.9 } },
      bubble: { distance: 180, size: 7, duration: 2, opacity: 0.95 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});


// ==========================
// Typed.js Banner Animation
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("userName") || "Pengunjung";

  new Typed("#typing-text", {
    strings: [
      `Hai ${savedName}, Selamat Datang`,
      "Lihat Portfolio Kami",
      "Berkarya Bersama RevoU"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
    showCursor: false
  });
});

// ==========================
// Navbar Scroll Effect
// ==========================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// ==========================
// Burger Menu Toggle
// ==========================
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ==========================
// Scroll to Portfolio Section
// ==========================
function scrollToPortfolio() {
  const portfolio = document.querySelector(".portfolio");
  if (portfolio) portfolio.scrollIntoView({ behavior: "smooth" });
}

// ==========================
// AOS Animations Initialization
// ==========================
AOS.init({
  duration: 1000,
  once: false,
  mirror: true
});

// ==========================
// Portfolio Cards Hover Effect
// ==========================
const portfolioCards = document.querySelectorAll(".portfolio-card");
portfolioCards.forEach(card => {
  card.addEventListener("mouseenter", () => card.classList.add("hovered"));
  card.addEventListener("mouseleave", () => card.classList.remove("hovered"));
});

// ==========================
// Scroll-based Portfolio Animation (in/out)
// ==========================
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const windowBottom = currentScrollY + window.innerHeight;

  portfolioCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top + currentScrollY;

    if (currentScrollY > lastScrollY) {
      // Scroll ke bawah → munculkan elemen
      if (cardTop < windowBottom - 50) card.classList.add("aos-animate");
    } else {
      // Scroll ke atas → sembunyikan elemen
      if (cardTop > windowBottom) card.classList.remove("aos-animate");
    }
  });

  lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
});
