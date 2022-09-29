//creamos funcion anashei
function calcularnotas () {
    const nota1 = document.getElementById ("nota1").value;
    const nota2     = document.getElementById ("nota2").value;

    //creamos el vector de notas god
    const notas = []; 
    notas[0] = +nota1;
    notas[1] = +nota2;

    //ahora a laburar al vector
    //recorremos vector con ciclo for

    let minimo = notas[0];
    let maximo = notas[0];
    let promedio;
    let suma = 0;

    for(let i=0 ; i<notas.length ; i++ ) {

        if (notas[i] < minimo ) {
            minimo = notas[i];
        }

        if (notas[i] > maximo ) {
            maximo = notas[i];
        }
        //sumamos las notaas
        suma = suma + notas[i];
    }
    //calculemos el promedio anashei con las sumas
    promedio = suma / notas.length;

    console.log(maximo);
    console.log(minimo);
    console.log(promedio);

    document.getElementById("menor").value - minimo
    document.getElementById("mayor").value - maximo
    document.getElementById("promedio").value - promedio

   

}