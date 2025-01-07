import "./style.css";

const headers = document.querySelectorAll(".accordian-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("show");
  });
});
