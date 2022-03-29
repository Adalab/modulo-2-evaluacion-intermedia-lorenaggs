'use strict';

const btn = document.querySelector(".js_btn");
const balance = document.queryCommandValue(".js_balance")
const points = document.querySelector(".js_points");
const valor = document.querySelector(".js_valor");
const numberUser = document.querySelector(".js_numberuser");
const value = document.querySelector(".js_value");
const letsGo = document.querySelector(".js_letsgo");
const validate = document.querySelector(".js_validate");

function pointsValue() {
  const start = points.value;
  valor.innerHTML = start;
}
  
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function play() {
  const numAleat = getRandomNumber(6);
  const selectValue = parseInt(numberUser.value);
  const valorAcum = points.value * 2;
  if (selectValue === numAleat) {
    letsGo.innerHTML = "HA GANADO EL JUEGO";
    valor.innerHTML = valorAcum;
  } else {
    letsGo.innerHTML = "Ha perdido el juego";
    valor.innerHTML = 0;
  }
  validateValue(valorAcum);
}

function validateValue(valorAcum) {
  if (valorAcum >= 200) {
    validate.innerHTML = `Su acumulado es de ${valorAcum} ha lelgado al maximo, por favor retirese`;
  } else {
    validate.innerHTML = `Siga jugando`;
  }
}


function handleclickBtn(event) {
  event.preventDefault();
  pointsValue();
  play();
  // validate();
}

btn.addEventListener('click', handleclickBtn);