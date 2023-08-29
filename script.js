const excuses = [
  "Przepraszam, ale dzisiaj nie mam wystarczająco dużo czasu na stream.",
  "Mam techniczne problemy, które muszę naprawić przed streamem.",
  // Dodaj kolejne wymówki tutaj
];

const excuseDisplay = document.getElementById("excuseDisplay");
const generateButton = document.getElementById("generateButton");

let isAnimating = false;
let currentExcuseIndex = -1;

generateButton.addEventListener("click", () => {
  if (isAnimating) return;
  isAnimating = true;

  let animationInterval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    excuseDisplay.textContent = excuses[randomIndex];
  }, 50);

  setTimeout(() => {
    clearInterval(animationInterval);
    currentExcuseIndex = Math.floor(Math.random() * excuses.length);
    excuseDisplay.textContent = excuses[currentExcuseIndex];
    isAnimating = false;
  }, 1000);
});
