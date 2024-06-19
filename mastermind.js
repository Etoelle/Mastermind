const COLORS = ["yellow", "blue", "red", "green", "pink", "purple"];

const SELECT_YELLOW = document.getElementById("yellow");
const SELECT_BLUE = document.getElementById("blue");
const SELECT_RED = document.getElementById("red");
const SELECT_GREEN = document.getElementById("green");
const SELECT_PINK = document.getElementById("pink");
const SELECT_PURPLE = document.getElementById("purple");

const GAME_TABLE = document.getElementById("gameTable");

function gameTableCreate() {
  for (let i = 0; i < 12; i++) {
    const TR = document.createElement("tr");

    GAME_TABLE.appendChild(TR);
    TR.classList.add(
      "w-full",
      "h-full",
      "flex",
      "justify-evenly",
      "items-center",
      "py-1"
    );

    for (let index = 0; index < 5; index++) {
      const TD = document.createElement("td");
      TR.append(TD);
      TD.classList.add("rounded-full", "h-8", "w-8", "border-2", "mx-1");
    }

    for (let dex = 0; dex < 4; dex++) {
      const DIV = document.createElement("div");
      TR.lastChild.append(DIV);
      TR.lastChild.classList.remove(
        "rounded-full",
        "h-8",
        "w-8",
        "border-2",
        "mx-1"
      );
      TR.lastChild.classList.add(
        "rounded-xl,",
        "h-8",
        "w-20",
        "border-2",
        "flex",
        "justify-evenly",
        "items-center"
      );
      DIV.classList.add("w-4", "h-4", "rounded-full", "border");
    }
  }
}

gameTableCreate();

// TODO HTML btn replay + btn reset + btn confirm
// Event listener sur btn rejouer pour reset la game
// Event listener sur btn reset pour reset les couleurs choisies
// Rendre uniquement la première ligne utilisable
// Event listener au click sur la couleur --> cursor = couleur
// Event listener au click sur row du jeu --> couleur appliquée et cursor normal
// Event listener au click sur une autre couleur --> cursor = couleur
// Event listener sur btn confirmer pour confirmer et vérifier les choix
// for avec index --> si guessing [i] = to guess [i] alors un rond rouge dans le tableau d'indices, splice couleur choisie [i] & splice couleur to guess [i]
// for avec index --> filter le tableau guessing avec to guess, si length du tableau de filter = 1 alors splice to guess [i], splice guessing index of color -1 et rond blanc dans le tableau d'indices
// i++ pour continuer à jouer à la ligne suivante
// TODO HTML Modal win avec btn replay et btn close + close possible en cliquant en dehors
// Si tableau d'indices = 4 rouges alors modal win class list remove hidden
// TODO HTML Modal loose avec btn replay et btn close + close possible en cliquant en dehors
// Si guessing index = 12 alors modal loose class list remove hidden
