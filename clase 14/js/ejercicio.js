//calculadora con + - / //

function calcular () {
let op1;
let op2;
let resultado;
let operacion;

op1 = document.getElementById ('op1').value;   
operacion = document.getElementById ('operacion').value;   
op2 = document.getElementById ('op2').value; 

console.log ('op1 vale: ', op1)     
console.log ('op2 vale: ', op2)
console.log ('operacion vale: ', operacion)

//ahora hacemos el if

if (operacion === '+') {
resultado = (+op1) + parseInt(op2)
}

if (operacion === '-') {
    resultado = parseInt (op1) - (+op2)
}


if (operacion === '/') {

 if (op2 != 0) {
    resultado = (+op1) / parseInt(op2)

 } else {
    resultado = 'No se puede dividir por 0'
 }

}

if (operacion === '*') {
    resultado = (+op1) * parseInt(op2)
}

console.log(resultado);

document.getElementById('resultado').innerHTML = resultado;

}

function limpiar () {
  document.getElementById('op1').value='';
  document.getElementById('op2').value='';
  document.getElementById('operacion').value='';
  document.getElementById('resultado').innerHTML    ='';
}
