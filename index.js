var btns = document.querySelectorAll(".drum");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    var char = e.target.innerHTML;
    playSound(char);
    btnAnim(char);
  });
}

document.addEventListener("keydown", (e) => {
  playSound(e.key);
  btnAnim(e.key);
});

function playSound(char) {
  switch (char) {
    case "w":
      let aud1 = new Audio("./sounds/tom-1.mp3");
      aud1.play();
      break;
    case "a":
      let aud2 = new Audio("./sounds/tom-2.mp3");
      aud2.play();
      break;
    case "s":
      let aud3 = new Audio("./sounds/tom-3.mp3");
      aud3.play();
      break;
    case "d":
      let aud4 = new Audio("./sounds/tom-4.mp3");
      aud4.play();
      break;
    case "j":
      let aud5 = new Audio("./sounds/crash.mp3");
      aud5.play();
      break;
    case "k":
      let aud6 = new Audio("./sounds/kick-bass.mp3");
      aud6.play();
      break;
    case "l":
      let aud7 = new Audio("./sounds/snare.mp3");
      aud7.play();
      break;
  }
}

function btnAnim(key) {
  var activeBtn = document.querySelector("." + key);
  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 50);
}
