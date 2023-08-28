const excuses = [
  "Nie mam dzisiaj czasu.",
  "Techniczne problemy.",
  // Dodaj więcej wymówek...
];

const display = document.getElementById("display");
const copyButton = document.getElementById("copy-button");
const spinButton = document.getElementById("spin-button");

spinButton.addEventListener("click", () => {
  spinButton.disabled = true;
  copyButton.disabled = true;
  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];

  display.innerHTML = `
    <div class="smurf-text">SmerfTV_</div>
    <p>${randomExcuse}</p>
  `;

  setTimeout(() => {
    spinButton.disabled = false;
    copyButton.disabled = false;
  }, 1000);
});

copyButton.addEventListener("click", () => {
  const textToCopy = display.textContent;
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
});
