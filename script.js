const excuses = [
  "Nie mam dzisiaj czasu.",
  "Techniczne problemy.",
  // Dodaj więcej wymówek...
];

const slotMachine = document.getElementById("slot-machine");
const result = document.getElementById("result");
const excuseDisplay = document.getElementById("excuse");
const copyButton = document.getElementById("copy-button");
const nextButton = document.getElementById("next-button");
const spinButton = document.getElementById("spin-button");

spinButton.addEventListener("click", () => {
  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  excuseDisplay.textContent = randomExcuse;

  slotMachine.style.display = "none";
  result.style.display = "block";
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

nextButton.addEventListener("click", () => {
  result.style.display = "none";
  slotMachine.style.display = "block";
});

