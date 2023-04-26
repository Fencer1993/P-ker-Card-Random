window.onload = function() {
  let symbols = ["♦", "♥", "♠", "♣"];
  let numSymbol = Math.floor(Math.random() * 3);

  document.querySelector(".upSymbol").innerHTML = symbols[numSymbol];
  if (symbols[numSymbol] == "♦") {
    let rombo = document.querySelector(".upSymbol");
    rombo.style.color = "red";
  } else if (symbols[numSymbol] == "♥") {
    let heart = document.querySelector(".upSymbol");
    heart.style.color = "red";
  }
  document.querySelector(".downSymbol").innerHTML = symbols[numSymbol];

  if (symbols[numSymbol] == "♦") {
    let rombo = document.querySelector(".downSymbol");
    rombo.style.color = "red";
  } else if (symbols[numSymbol] == "♥") {
    let heart = document.querySelector(".downSymbol");
    heart.style.color = "red";
  }

  let num = Math.floor(Math.random() * 13) + 1;
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
  }
};
// Botón --------------------
document.querySelector(".button").addEventListener("click", function() {
  let symbols = ["♦", "♥", "♠", "♣"];
  let numSymbol = Math.floor(Math.random() * 3);

  document.querySelector(".upSymbol").innerHTML = symbols[numSymbol];
  if (symbols[numSymbol] == "♦") {
    let rombo = document.querySelector(".upSymbol");
    rombo.style.color = "red";
  } else if (symbols[numSymbol] == "♥") {
    let heart = document.querySelector(".upSymbol");
    heart.style.color = "red";
  }
  document.querySelector(".downSymbol").innerHTML = symbols[numSymbol];

  if (symbols[numSymbol] == "♦") {
    let rombo = document.querySelector(".downSymbol");
    rombo.style.color = "red";
  } else if (symbols[numSymbol] == "♥") {
    let heart = document.querySelector(".downSymbol");
    heart.style.color = "red";
  }

  let num = Math.floor(Math.random() * 13) + 1;
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
  }
});
