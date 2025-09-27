// ==========================
// Particles.js - Banner
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
// Typed.js - Banner Text
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("userName") || "Pengunjung";

  new Typed("#typing-text", {
    strings: [
      `Hai ${savedName}, Selamat Datang`,
      "Pelajari lebih lanjut tentang RevoU",
      "Kami membangun talenta digital"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
    showCursor: false
  });
});

// ==========================
// Scroll to About Section
// ==========================
function scrollToAbout() {
  const about = document.getElementById("aboutSection");
  if (about) {
    about.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================
// Navbar scroll effect
// ==========================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ==========================
// Burger menu toggle
// ==========================
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ==========================
// AOS - Animate On Scroll
// ==========================
const aosElements = document.querySelectorAll("[data-aos]");
let lastScrollTop = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const windowBottom = currentScroll + window.innerHeight;

  aosElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top + window.scrollY;

    if (currentScroll > lastScrollTop) {
      // Scroll ke bawah
      if (elTop + el.offsetHeight < currentScroll + 50) {
        el.classList.remove("aos-animate");
      } else if (elTop < windowBottom) {
        el.classList.add("aos-animate");
      }
    } else {
      // Scroll ke atas
      if (elTop > windowBottom - 50) {
        el.classList.remove("aos-animate");
      } else if (elTop < windowBottom) {
        el.classList.add("aos-animate");
      }
    }
  });

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ==========================
// Initialize AOS
// ==========================
AOS.init({
  duration: 1000,
  once: false,
  mirror: true
});
