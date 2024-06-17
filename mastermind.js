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
