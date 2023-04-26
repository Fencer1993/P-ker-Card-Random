window.onload = function() {
  let num = Math.floor(Math.random() * 13) + 1;
  if (num == 11) {
    document.querySelector("h1").innerHTML = "J";
  } else if (num == 12) {
    document.querySelector("h1").innerHTML = "Q";
  } else if (num == 13) {
    document.querySelector("h1").innerHTML = "K";
  } else {
    document.querySelector("h1").innerHTML = num;
  }
};
