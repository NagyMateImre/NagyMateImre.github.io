const Ingatlan = document.getElementById('Ingatlan');
const Ugyfel = document.getElementById('Ugyfel');
const Kezelt = document.getElementById('Kezelt');
const ertekek = document.getElementById('ertekek');
const table = document.getElementById('table');

document.addEventListener('DOMContentLoaded', () =>{
    Ingatlan.innerText = "5";
    Ugyfel.innerText = "12";
    Kezelt.innerText = localStorage.getItem("Tomb");
})

let mysql = require('mysql2');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

console.log("Kész!");

