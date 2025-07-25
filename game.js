let gameSqe = [];
let userSqe = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let highPoint = 0;

let h3 = document.querySelector("h3");

function checkHighScore() {
  let scorePalet = document.querySelector(".highScore");
  if (level > highPoint) {
    highPoint = level; // Update high score if new record
  }
  scorePalet.innerHTML = `HIGH SCORE: <b>${highPoint}</b>`;
}



document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function checkAns(idx) {
  if (userSqe[idx] === gameSqe[idx]) {
    if (userSqe.length == gameSqe.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `Game is over! your score was <b>${level}</b> <br /> please press any key to restart the game`;
    
    console.error("wrong Color");
    
    
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    
    checkHighScore();
    reset();
    
  }
}

function levelUp() {
  userSqe = [];
  level++;
  h3.innerText = `Level ${level}`;

  
  

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSqe.push(randColor);
  console.log(gameSqe);
  btnFlash(randBtn);

  
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSqe.push(userColor);

  checkAns(userSqe.length - 1);
}

let allBtns = document.querySelectorAll(".box");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameSqe = [];
  userSqe = [];
  started = false;
  level = 0;
}

