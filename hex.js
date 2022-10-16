const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const background = document.querySelector(".background");
const footerText = document.querySelector(".ft-text");

btn.addEventListener("click", function () {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
  color.style.color = hexColor;
  background.style.color = hexColor;
  footerText.style.color = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
