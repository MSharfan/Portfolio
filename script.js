// Mobile nav toggle
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navToggle.classList.toggle("open");
});

// Close nav on link click (mobile)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.classList.remove("open");
  });
});

// Active link on scroll
const sections = document.querySelectorAll("section[id]");

function setActiveLink() {
  const scrollY = window.scrollY + 120;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav__link[href="#${id}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link?.classList.add("active");
    } else {
      link?.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const form = document.querySelector(".contact__form");

  form.addEventListener("submit", () => {
    setTimeout(() => {
      form.reset();
      alert("Message sent successfully!");
    }, 500);
  });