function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const colorSpanEl = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorSpanEl.textContent = randomColor;
});
