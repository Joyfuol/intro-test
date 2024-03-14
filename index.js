const body = document.querySelector("body");
const button = document.querySelector("button");
const tbody = document.querySelector("tbody");

function generateRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let count = 0;

 

function addColorRow(serialNumber, colorCode) {
  const newRow = tbody.insertRow()
  newRow.innerHTML = `<tr>
<td style="background-color: ${colorCode};">${serialNumber}</td>
<td style="background-color: ${colorCode};">${colorCode}</td>
</tr>

`; 
}

button.addEventListener("click", function () {
  const color = generateRandomRGB();

  body.style.backgroundColor = color
  addColorRow(++count, color);
  
});
