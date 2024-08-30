let saveEl = document.getElementById("save-el");

// let button = 0;
let button = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;


function updateCounter() {
  document.getElementById("counter").innerText = button;
}

function buttonIncrement() {
  button += 1;
  updateCounter();
  localStorage.setItem("counter", button);

}

function buttonDecrement() {
  button -= 1;
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