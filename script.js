const excuses = [
  "Nie mam dzisiaj czasu.",
  "Techniczne problemy.",
  "Nie czuję się najlepiej.",
  "Niestety, coś mi wyskoczyło.",
  "Chciałbym, ale muszę pracować.",
  "Rodzinne zobowiązania.",
  "Planuję coś innego.",
  "Internet mi dzisiaj szwankuje.",
  "Nie mam dobrego oświetlenia.",
  "Chcę odpocząć po ciężkim dniu.",
  "Sprzęt nie działa jak trzeba.",
  "Wymagany odpoczynek.",
  "Brak dobrego pomysłu na dzisiejszy stream.",
  "Muszę się przygotować lepiej.",
  "Wracam za tydzień!",
  "Awaria prądu.",
  "Nie mogę dzisiaj, bo remontują sąsiadów.",
  "Zapomniałem zaplanować stream.",
  "Odpoczywam od streamowania.",
  "Szukam nowych gier do zaprezentowania."
];

const display = document.getElementById("display");
const spinButton = document.getElementById("spin-button");

function spin() {
  spinButton.disabled = true;
  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];

  let currentExcuseIndex = 0;
  const interval = setInterval(() => {
    display.textContent = excuses[currentExcuseIndex];
    currentExcuseIndex++;

    if (currentExcuseIndex >= excuses.length) {
      clearInterval(interval);
      display.textContent = randomExcuse;
      spinButton.disabled = false;
    }
  }, 100);
}
