const excuses = [
  "Przepraszam, ale dzisiaj nie mam wystarczająco dużo czasu na stream.",
  "Mam techniczne problemy, które muszę naprawić przed streamem.",
  // Dodaj kolejne wymówki tutaj
];

const excuseDisplay = document.getElementById("excuseDisplay");
const generateButton = document.getElementById("generateButton");
const nextButton = document.getElementById("nextButton");

let currentExcuseIndex = -1;

generateButton.addEventListener("click", () => {
  currentExcuseIndex = Math.floor(Math.random() * excuses.length);
  excuseDisplay.textContent = excuses[currentExcuseIndex];
  nextButton.disabled = false;
});

nextButton.addEventListener("click", () => {
  currentExcuseIndex = (currentExcuseIndex + 1) % excuses.length;
  excuseDisplay.textContent = excuses[currentExcuseIndex];
});

