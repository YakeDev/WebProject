"use strict";
// Affiche le jour et l'heure actuels
function currentDayTime() {
  const jour = document.querySelector("#day");
  const heure = document.querySelector("#current-time");

  const date = new Date();
  const day = date.getDay();
  const dayNames = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const hour = date.getHours();
  let AmPm = hour >= 12 ? "PM" : "AM";
  const min = date.getMinutes();
  const sec = date.getSeconds();

  // console.log(`${dayNames[day]}, ${hour}:${min}:${sec}`);
  jour.innerHTML = `${dayNames[day]}`;
  heure.innerHTML = `${hour} ${AmPm} : ${min} : ${sec}`;
}
currentDayTime();

//Print Current page

const printBtn = document.getElementById("printBtn");
printBtn.addEventListener("click", function () {
  window.print();
});

//Multiplication-division
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");

function recupererHtml() {}

function initialiser() {
  resultat.innerHTML = 0;
}

multiplication.addEventListener("click", function () {
  const nb1 = document.getElementById("nb1").value;
  const nb2 = document.getElementById("nb2").value;
  const resultat = document.getElementById("resultat");

  if (nb1 != "" && nb2 != "") {
    resultat.innerHTML = nb1 * nb2;
  } else {
    resultat.innerHTML = "Veuillez saisir deux nombres";
    resultat.style.color = "red";
  }
});
division.addEventListener("click", function () {
  const nb1 = document.getElementById("nb1").value;
  const nb2 = document.getElementById("nb2").value;
  const resultat = document.getElementById("resultat");

  if (nb1 != "" && nb2 != "") {
    resultat.innerHTML = nb1 / nb2;
  } else {
    resultat.innerHTML = "Veuillez saisir deux nombres";
    resultat.style.color = "red";
  }
});
