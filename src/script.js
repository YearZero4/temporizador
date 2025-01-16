var valor; 
var intervalo; 

function start() {
document.getElementById('conv').innerHTML = '';
valor = parseInt(document.querySelector('#temporizador').textContent); 
intervalo = setInterval(cuentaRegresiva, 1000);
}

document.querySelector('#stop').addEventListener('click', function() {
const val = valor;
const horas = Math.floor(val / 3600);
const minutos = Math.floor((val % 3600) / 60);
const segundos = val % 60;

document.getElementById('conv').innerHTML = `${horas} horas, ${minutos} minutos, ${segundos+1} segundos`;
clearInterval(intervalo);
});

document.querySelector('#continued').addEventListener('click', function() {
 start();
});

document.querySelector('#start').addEventListener('click', function() {
clearInterval(intervalo);
const rst = document.querySelector("#temporizador");
const btn = document.querySelector("#buttons");
const img = document.querySelector("#img");
const inpts = document.querySelector("#inputs");
rst.style.display = "none";
btn.style.display = "none";
img.style.display = "flex";
inpts.style.display = "flex";
});


function add() {
var valor = document.getElementById('value').value;
if(valor.length !== 0){
const array = valor.split(':');
let hours = 0, minutes = 0, seconds = 0;
if (array.length === 3) {
 hours = parseInt(array[0], 10);
 minutes = parseInt(array[1], 10);
 seconds = parseInt(array[2], 10);
} else if (array.length === 2) {
 minutes = parseInt(array[0], 10);
 seconds = parseInt(array[1], 10);
} else if (array.length === 1) {
 seconds = parseInt(array[0], 10);
}
var valor = (hours * 3600) + (minutes * 60) + seconds;
 document.getElementById('temporizador').innerText = valor + 's'; 
 const rst = document.querySelector("#temporizador");
 rst.style.display = "flex";
 const inpts = document.querySelector("#inputs");
 const img = document.querySelector("#img");
 const btn = document.querySelector("#buttons");
 inpts.style.display = 'none';
 img.style.display = 'none';
 btn.style.display = 'flex';
 start();

}
}
function cuentaRegresiva() {
if (valor >= 0) {
 document.getElementById('temporizador').innerText = valor + 's'; 
 valor--;
} else {
 clearInterval(intervalo); 
 }
}

