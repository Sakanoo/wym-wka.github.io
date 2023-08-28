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
  const formattedExcuse = `
    <div class="nick"><span class="smurf-text">SmerfTV_</span></div>
    <p class="excuse">${randomExcuse}</p>
    <button class="action-button" id="copy-button">Skopiuj</button>
    <button class="action-button" id="next-button">Losuj dalej</button>
  `;

  display.innerHTML = formattedExcuse;
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

