function incrementar () {
    const label = document.getElementById ('contador');
    let valor = parseInt (label.innerHTML);

    //incremento de contadorValor

    valor++;

    //update del valor
    label.innerHTML = valor;

    paridad (valor);

}

function decrementar () {
    const label = document.getElementById('contador')
    let valor = label.innerHTML;
    valor = (+valor) -1;

    //update del valor

    label.innerHTML = valor;

    paridad (valor);

    //par o impar

}

//funcion paridad

function paridad (valor) {

    const labelParidad = document.getElementById('paridad');

    //invocamos la funcion espar

    let esNumeropar = esPar (valor)

    
    if (esNumeropar) {
        labelParidad.innerHTML = 'Par'       
    }
    else {
        labelParidad.innerHTML = 'Impar' 
    }

}

function esPar (valor) {
    //hay que hacer volver la rpta a paridad
    return valor % 2 === 0
    }