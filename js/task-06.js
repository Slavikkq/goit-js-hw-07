function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const inputValue = input.value;
  if (inputValue >= 1 && inputValue <= 100) {
    destroyBoxes();

    let size = 30;
    let boxesHTML = "";
    for (let i = 0; i < inputValue; i++) {
      const color = getRandomHexColor();
      boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
      size += 10;
    }
    boxesContainer.innerHTML = boxesHTML;

    input.value = "";
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
