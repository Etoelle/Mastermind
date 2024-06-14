const COLORS = ["yellow", "blue", "red", "green", "pink", "purple"];
const GUESSING = ["green", "yellow", "red", "purple"];

// ! 1) Créer une fonction qui renvoie un tableau avec une couleur aléatoire dans chaque case
const GUESS_ARRAY = new Array(4);

function randomColors() {
  for (let i = 0; i < GUESS_ARRAY.length; i++) {
    const RANDOM_INDEX = Math.floor(Math.random() * COLORS.length);
    GUESS_ARRAY[i] = COLORS[RANDOM_INDEX];
  }
  return GUESS_ARRAY;
}

const TO_GUESS = randomColors();
console.log(TO_GUESS);
console.log(GUESSING);

// ! 2) Créer une fonction avec 2 tableaux en paramètres qui renvoie le nombre d'éléments similaires à la même position

function correct(tableau1, tableau2) {
  let correctNumber = 0;
  for (let i = 0; i < tableau1.length; i++) {
    if (tableau1[i] === tableau2[i]) {
      correctNumber++;
      tableau1.splice([i], 1);
      tableau2.splice([i], 1);
    } else {
    }
  }
  console.log("Il y a " + correctNumber + " couleurs à la bonne place");
  console.log("Bonnes places supprimées");
  console.log(tableau1);
  console.log(tableau2);
}
correct(TO_GUESS, GUESSING);

// ! 3) Créer une fonction avec 2 tableaux en paramètres qui renvoie le nombre d'éléments similaires mal placés
function almost(tableau1, tableau2) {
  let almostNumber = 0;
  for (let i = 0; i < tableau1.length; i++) {
    let almostColor = tableau2.filter((colorG) => colorG === tableau1[i]);
    if (almostColor.length === 1) {
      tableau1.splice([i], 1);
      let gIndex = tableau2.indexOf(almostColor) - 1;
      tableau2.splice([gIndex], 1);
      almostNumber++;
    }
    // console.log("Couleur trouvée");
    // console.log(almostColor);
    // console.log("Mauvaises places supprimées");
    // console.log(tableau1);
    // console.log(tableau2);
  }
  console.log(
    "Il y a " + almostNumber + " couleurs qui justes mais pas à la bonne place"
  );
}
almost(TO_GUESS, GUESSING);
