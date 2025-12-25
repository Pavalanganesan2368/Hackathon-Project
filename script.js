// Initialize AOS Animations
AOS.init({ duration: 1000, once: true });

// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));

// Filter System
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".course-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    cards.forEach((card) => {
      card.style.display =
        filter === "all" || card.dataset.category === filter ? "block" : "none";
    });
  });
});

// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");
setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 4000);

// Chat Widget Logic
const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");
const chatWidget = document.getElementById("chatWidget");

openChat.onclick = () => (chatWidget.style.display = "block");
closeChat.onclick = () => (chatWidget.style.display = "none");

// Form Handling
document.getElementById("admissionForm").onsubmit = (e) => {
  e.preventDefault();
  e.target.style.display = "none";
  document.getElementById("successBox").style.display = "block";
};
