const excuses = [
  "Nie mam dzisiaj czasu.",
  "Techniczne problemy.",
  "Jestem na treningu move, jutro live",
];

const slotMachine = document.getElementById("slot-machine");
const slot = document.getElementById("slot");
const excuseDisplay = document.getElementById("excuse");
const result = document.getElementById("result");
const resultExcuse = document.getElementById("result-excuse");
const nextButton = document.getElementById("next-button");
const spinButton = document.getElementById("spin-button");

spinButton.addEventListener("click", () => {
  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  excuseDisplay.textContent = randomExcuse;

  slot.style.animation = "none"; // Resetuje animację
  setTimeout(() => {
    slot.style.animation = "spin 5s infinite"; // Uruchamia animację
    resultExcuse.textContent = randomExcuse;
    slotMachine.style.display = "none";
    result.style.display = "block";
  }, 10); // Opóźnienie, aby animacja się zresetowała
});

nextButton.addEventListener("click", () => {
  result.style.display = "none";
  slotMachine.style.display = "block";
});
