import "./styles.css";

const carouselWrapper = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const images = Array.from(carouselWrapper.children);
var currentIndex = 0;
function updateCarousel() {
  console.log("width", currentIndex);
  const width = images[0].getBoundingClientRect().width;
  carouselWrapper.style.transform = `translateX(-${width * currentIndex}px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}, 3000);
