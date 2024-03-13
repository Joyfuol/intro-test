const body = document.querySelector("body");
const button = document.querySelector("button");
const tableCell = document.querySelectorAll("td, th");
function generateRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", function () {
  body.style.backgroundColor = generateRandomRGB()

  tableCell.forEach((cell) => {
    cell.style.backgroundColor = generateRandomRGB()
  });
});
