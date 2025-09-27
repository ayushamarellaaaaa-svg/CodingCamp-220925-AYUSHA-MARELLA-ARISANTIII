// ==========================
// Particles.js
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
// Typed.js
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("userName") || "Pengunjung";

  new Typed("#typing-text", {
    strings: [
      `Hai ${savedName}, Selamat Datang`,
      "Mari Jelajahi Website Ini",
      "Belajar & Berkarya Bersama"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
    showCursor: false
  });
});

// ==========================
// Scroll to Headquarter
// ==========================
function scrollToHeadquarter() {
  const headquarter = document.querySelector(".headquarter");
  if (headquarter) {
    headquarter.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================
// Navbar scroll effect
// ==========================
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
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
// Headquarter Scroll Animation
// ==========================
const headquarterSection = document.querySelector(".headquarter");
const hqElements = headquarterSection.querySelectorAll("[data-aos]");

// Menyimpan posisi scroll sebelumnya
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // Scroll ke bawah → munculkan animasi
  if (currentScrollY > lastScrollY) {
    hqElements.forEach(el => el.classList.add("aos-animate"));
  } 
  // Scroll ke atas → sembunyikan animasi
  else {
    hqElements.forEach(el => el.classList.remove("aos-animate"));
  }

  lastScrollY = currentScrollY;
});

// Inisialisasi AOS
AOS.init({
  duration: 1000,
  once: false // karena kita ingin bisa hilang/muncul lagi
});

// ==========================
// Footer scroll effect
// ==========================
let lastScrollTop = 0;
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
  let st = window.scrollY || document.documentElement.scrollTop;
  
  if (st > lastScrollTop) {
    // scroll ke bawah → munculkan footer
    footer.classList.add("aos-animate");
  } else {
    // scroll ke atas → sembunyikan footer
    footer.classList.remove("aos-animate");
  }

  lastScrollTop = st <= 0 ? 0 : st; // untuk mobile
});
