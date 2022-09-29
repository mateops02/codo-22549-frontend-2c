function calcularNotas () {
    const nota1 = document.getElementById("nota1").value
    const nota2 = document.getElementById("nota2").value

    const notas = []

    notas[0] = parseInt(nota1);
    notas[1] = +nota2;

    //ahora laburo con el vector
    //recorro el vector

    let menor = [0];
    let mayor = [0];
    let promedio = [0]

    for(let i=0;i<notas.length;i++) {
        console.log(notas[i]);
    }
}