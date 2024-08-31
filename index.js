let saveEl = document.getElementById("save-el");

// let button = 0;
let button = localStorage.getItem("counter")
  ? parseInt(localStorage.getItem("counter"))
  : 0;

function updateCounter() {
  let counterText = button === 1 ? button + " cup " : button + " cups";
  document.getElementById("counter").innerText = counterText;

  if (button >= 14) {
    document.getElementById("congrats").innerText = "You're on fire!";
  } else if (button >= 13) {
    document.getElementById("congrats").innerText = "You hit the daily goal!";
  } else if (button <= 0) {
    document.getElementById("congrats").innerText = "Recommended: 13 cups daily!";
  } else {
    document.getElementById("congrats").innerText = "Keep Sipping!";
  }
}

function buttonIncrement() {
  button += 1;
  updateCounter();
  localStorage.setItem("counter", button);
}

function buttonDecrement() {
  button -= 1;

  if (button < 0) {
    button = 0;
  }
  updateCounter();

  localStorage.setItem("counter", button);
}

function resetCounter() {
  button = 0;
  updateCounter();
  localStorage.setItem("counter", button);
}

document.getElementById("reset").onclick = resetCounter;
document.getElementById("Decrease").onclick = buttonDecrement;
document.getElementById("buttonincrement").onclick = buttonIncrement;

updateCounter();
