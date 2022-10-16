const colors = [
  "green",
  "red",
  "blue",
  "yellow",
  "pink",
  "orange",
  "violet",
  "magenta",
  "indigo",
  "cyan",
  "gray",
  "teal",
  "navy",
  "silver",
  "maroon",
  "lime",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const background = document.querySelector(".background");
const footerText = document.querySelector(".ft-text");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  const simpleColor = colors[randomNumber];
  document.body.style.backgroundColor = simpleColor;
  color.textContent = simpleColor;
  color.style.color = simpleColor;
  background.style.color = simpleColor;
  footerText.style.color = simpleColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
