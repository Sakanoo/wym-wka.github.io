const excuses = [
  "Nie mam dzisiaj czasu.",
  "Techniczne problemy.",
  // Dodaj więcej wymówek...
];

const overlay = document.getElementById("overlay");
const excuseDisplay = document.getElementById("excuse");
const copyButton = document.getElementById("copy-button");
const backButton = document.getElementById("back-button");
const spinButton = document.getElementById("spin-button");

spinButton.addEventListener("click", () => {
  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];

  excuseDisplay.textContent = randomExcuse;
  overlay.classList.add("active");
});

backButton.addEventListener("click", () => {
  overlay.classList.remove("active");
});

copyButton.addEventListener("click", () => {
  const textToCopy = excuseDisplay.textContent;
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
});
