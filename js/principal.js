var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";
var paulo = document.querySelector('#paciente1');
var peso = paulo.querySelector('.info-peso');
var altura = paulo.querySelector('.info-altura');
var imc = peso / (altura*altura);
document.querySelector('.info-imc').textContent = imc;