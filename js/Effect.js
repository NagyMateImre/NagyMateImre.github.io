import { totalCards } from "./Szuro";

const Ingatlan = document.getElementById('Ingatlan');
const Ugyfel = document.getElementById('Ugyfel');
const Kezelt = document.getElementById('Kezelt');
const ertekek = document.getElementById('ertekek');
const table = document.getElementById('table');

document.addEventListener('DOMContentLoaded', () =>{
    Ingatlan.innerText = "5";
    Ugyfel.innerText = "12";
    Kezelt.innerText = totalCards;
})


