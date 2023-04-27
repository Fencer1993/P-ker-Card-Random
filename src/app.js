// Función general

let generateRandomCard = () => {
  // Los símbolos

  let symbols = ["♦", "♥", "♠", "♣"];
  let numSymbol = Math.floor(Math.random() * 4);

  document.querySelector(".upSymbol").innerHTML = symbols[numSymbol];
  if (symbols[numSymbol] == "♦") {
    let rombo = document.querySelector(".upSymbol");
    rombo.style.color = "red";
  } else if (symbols[numSymbol] == "♥") {
    let heart = document.querySelector(".upSymbol");
    heart.style.color = "red";
  } else {
    let loDemas = document.querySelector(".upSymbol");
    loDemas.style.color = "black";
  }

  document.querySelector(".downSymbol").innerHTML = symbols[numSymbol];
  if (symbols[numSymbol] == "♦") {
    let rombo = document.querySelector(".downSymbol");
    rombo.style.color = "red";
  } else if (symbols[numSymbol] == "♥") {
    let heart = document.querySelector(".downSymbol");
    heart.style.color = "red";
  } else {
    let loDemas = document.querySelector(".downSymbol");
    loDemas.style.color = "black";
  }

  //  Números Aleatorios
  let num = Math.floor(Math.random() * 13 + 1);
  if (num == 11) {
    document.querySelector("h1").innerHTML = "J";
  } else if (num == 12) {
    document.querySelector("h1").innerHTML = "Q";
  } else if (num == 13) {
    document.querySelector("h1").innerHTML = "K";
  } else if (num == 1) {
    document.querySelector("h1").innerHTML = "A";
  } else {
    document.querySelector("h1").innerHTML = num;
  }

  if (symbols[numSymbol] == "♦" || symbols[numSymbol] == "♥") {
    document.querySelector("h1").style.color = "red";
  } else {
    document.querySelector("h1").style.color = "black";
  }
};

window.onload = generateRandomCard;

document
  .querySelector("#generator")
  .addEventListener("click", generateRandomCard);
