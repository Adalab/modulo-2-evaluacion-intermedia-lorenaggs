"use strict";

const btn = document.querySelector(".js_btn");
const balance = document.querySelector(".js_balance");
const points = document.querySelector(".js_points");
const valor = document.querySelector(".js_valor");
const numberUser = document.querySelector(".js_numberuser");
const value = document.querySelector(".js_value");
const letsGo = document.querySelector(".js_letsgo");
const validate = document.querySelector(".js_validate");

let valorInit = 50;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function win(numAleat, selectValue, balanceAp) {
  if (selectValue === numAleat) {
    letsGo.innerHTML = "Has ganado el doble del juego 😀";
    const balanceWin = balanceAp * 2 + valorInit;
    balance.innerHTML = balanceWin;
    if (balanceWin >= 200) {
      btn.innerHTML = "Reinicio de juego";
    }
  }
}

function lose(numAleat, selectValue, balanceAp) {
  if (selectValue !== numAleat) {
    letsGo.innerHTML = "Ha perdido lo apostado ☹️";
    const resta = valorInit - balanceAp;
    balance.innerHTML = resta;
    if (resta < 0) {
      balance.innerHTML = 0;
    }
  }
}

function play() {
  const numAleat = getRandomNumber(6);
  const selectValue = parseInt(numberUser.value);
  const balanceAp = parseInt(points.value);
  win(numAleat, selectValue, balanceAp);
  lose(numAleat, selectValue, balanceAp);
}

function handleclickBtn(event) {
  event.preventDefault();
  balance.innerHTML = valorInit;
  
  play();

  if (btn.innerText === "Reinicio de juego") {
  validate.innerHTML = `Su valor acumulado es de ${balance.innerText} retirese del juego`
  }
}

btn.addEventListener("click", handleclickBtn);

 