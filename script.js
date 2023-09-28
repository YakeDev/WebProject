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
