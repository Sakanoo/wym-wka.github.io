const excuses = [
     "Przepraszam, ale mam dzisiaj nieplanowane zobowiązania rodzinne.",
      "Niestety, mam problem z łączem internetowym i nie mogę nadawać dzisiaj.",
      "Z powodu nagłego wydarzenia muszę odwołać dzisiejszy stream.",
      "Chciałem zrobić stream, ale moja kamera się popsuła.",
      "Dzisiaj nie mam głosu, więc nie będę mógł prowadzić streama.",
      "Niestety, jestem obecnie chory i nie dam rady dzisiaj zrobić streama.",
      "Wypadł mi ważny rekordowy mecz w grze i muszę to teraz ogarnąć!",
      "Długo zapowiadałem to wydarzenie, ale coś mi wypadło i nie dam rady dzisiaj.",
      "Mam nieprzewidzianą awarię sprzętu, więc stream trzeba odwołać.",
      "Niestety, dzisiaj jestem kompletnie wyczerpany po ciężkim dniu.",
      "Przepraszam, ale moje plany się niespodziewanie zmieniły.",
      "Nie ma dzisiaj streama z powodu ważnej rozmowy przez telefon.",
      "Mam małe problemy techniczne, które trzeba naprawić przed streamem.",
      "Dzisiaj jestem na spotkaniu, więc nie będę dostępny na streamie.",
      "Przepraszam, ale muszę dzisiaj zająć się pilnymi sprawami.",
      "Stream przekładam na inny dzień ze względu na niespodziewane wydarzenia.",
      "Chciałem zrobić stream, ale dzisiaj jestem w podróży.",
      "Przepraszam, ale muszę pomóc przyjacielowi, więc nie będzie streama.",
      "Niestety, dzisiaj zaczęły mi się problemy techniczne z komputerem.",
      "Stream zostaje odwołany z powodu zbyt słabej jakości obrazu.",
      "Dzisiaj planowałem stream, ale niestety coś mi wypadło."
];

const excuseTextElement = document.getElementById("excuse-text");
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", generateExcuse);

function generateExcuse() {
  const randomIndex = Math.floor(Math.random() * excuses.length);
  excuseTextElement.textContent = excuses[randomIndex];
}
