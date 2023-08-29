const reelInner = document.getElementById("reelInner");
const spinButton = document.getElementById("spinButton");
const nextButton = document.getElementById("nextButton");

const excuses = [
  "Przewidziane przerwy techniczne.",
  "Pilne zobowiązania rodzinne.",
  "Nieoczekiwana choroba.",
  "Nagłe problemy z internetem.",
  "Wizyta niezapowiedzianych gości.",
  "Wymagająca sesja treningowa.",
  "Konieczność załatwienia pilnych spraw.",
  "Planowane aktualizacje sprzętu.",
  "Udział w konferencji lub warsztatach.",
  "Potrzeba odpoczynku i relaksu."
];

let isSpinning = false;

function getRandomExcuse() {
  return excuses[Math.floor(Math.random() * excuses.length)];
}

function spinReel() {
  if (isSpinning) return;

  isSpinning = true;
  spinButton.disabled = true;
  nextButton.classList.add("hidden");

  const spinDuration = 5000;
  const startPosition = 0;
  const endPosition = -600;

  reelInner.style.animation = `scroll ${spinDuration}ms linear`;
  reelInner.style.transform = `translateY(${endPosition}px)`;

  setTimeout(() => {
    isSpinning = false;
    spinButton.disabled = false;
    nextButton.classList.remove("hidden");

    reelInner.style.animation = "";
    reelInner.style.transform = `translateY(${startPosition}px)`;
  }, spinDuration);
}

spinButton.addEventListener("click", spinReel);

nextButton.addEventListener("click", () => {
  const excuse = getRandomExcuse();
  reelInner.innerHTML = `<p>${excuse}</p>`;
  nextButton.classList.add("hidden");
});

nextButton.classList.add("hidden");
</body>
