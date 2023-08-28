const excuses = [
  "Nie mam dzisiaj czasu.",
  "Techniczne problemy.",
  // Dodaj więcej wymówek...
];

const display = document.getElementById("display");
const spinButton = document.getElementById("spin-button");

spinButton.addEventListener("click", () => {
  spinButton.disabled = true;
  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];

  display.innerHTML = `<p>${randomExcuse}</p>`;

  setTimeout(() => {
    spinButton.disabled = false;
  }, 1000);
});

