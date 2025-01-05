import "./style.css";

const photos = [
  "https://via.placeholder.com/600x400?text=Photo+1",
  "https://via.placeholder.com/600x400?text=Photo+2",
  "https://via.placeholder.com/600x400?text=Photo+3",
  "https://via.placeholder.com/600x400?text=Photo+4",
  "https://via.placeholder.com/600x400?text=Photo+5",
  "https://via.placeholder.com/600x400?text=Photo+6",
];

let currentIndex = 0;

const gallary = document.getElementById("gallary");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");

photos.map((photo, index) => {
  const image = document.createElement("img");
  image.src = photo;
  image.onclick = () => onClickImage(index);
  gallary.appendChild(image);
});

function onClickImage(index) {
  currentIndex = index;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = photos[index];
  modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  currentIndex = "";
  modal.style.display = "none";
});
