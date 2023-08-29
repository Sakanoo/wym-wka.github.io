const excuses = [
  "Przepraszam, ale dzisiaj nie mam wystarczająco dużo czasu na stream.",
  "Mam techniczne problemy, które muszę naprawić przed streamem.",
  // Dodaj kolejne wymówki tutaj
];

const slot = document.getElementById("slot1");
const generateButton = document.getElementById("generateButton");

let isAnimating = false;
let currentExcuseIndex = -1;

generateButton.addEventListener("click", () => {
  if (isAnimating) return;
  isAnimating = true;

  const startTime = Date.now();
  const animationDuration = 2000; // ms
  const interval = 100; // ms
  let animationInterval = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    if (elapsedTime < animationDuration) {
      const randomIndex = Math.floor(Math.random() * excuses.length);
      slot.textContent = excuses[randomIndex];
    } else {
      clearInterval(animationInterval);
      currentExcuseIndex = Math.floor(Math.random() * excuses.length);
      slot.textContent = excuses[currentExcuseIndex];
      isAnimating = false;
    }
  }, interval);
});
