//objeto vacio
const unAlumno = {
    edad: 25,
    nombre: 'carlos',
    carrera: 'ING'
};

//array/vector/arreglos vacio de alumnos
const alumnos = [    
    {
        edad: 35,
        nombre: 'carlos',
        carrera: 'ING'
    },
    {
        edad: 35,
        nombre: 'RODRIGO',
        carrera: 'LIC'
    },
    {
        edad: 35,
        nombre: 'REINALDO',
        carrera: 'MATEMATICAS'
    },
];

let sumaEdades = 0; //acumulador
//SUMAR TODAS LAS EDADES
for(let i=0; i < alumnos.length;i++ ) {
    //sumaEdades = sumaEdades +  alumnos[i].edad;
    sumaEdades +=alumnos[i].edad;
}
console.log('primer forma:', sumaEdades);

sumaEdades = 0;
for (let alumno of alumnos) { //forarch
    sumaEdades+= alumno.edad;
}
console.log('2nda forma:', sumaEdades);

//expresion lambda
//array.forarch()
sumaEdades = 0;
alumnos.forEach(alumno => sumaEdades+= alumno.edad);  //centrar en que quiero hacer
console.log('3er forma:', sumaEdades);

//-------------------------------
//vamos a comparar eades
const menoresde40 = []; //nuevo vector vacio anashe
for(let alumno of alumnos) {

    if (alumno.edad < 40 ) {
        menoresde40.push(alumno);
    }
}
console.log ('menores de 40', menoresde40)

//filter:funcion lambda retorna lista de lo que se filtro
const alumnosmenoresde40 = alumnos.filter (alumno => alumno.edad < 40);
console.log (alumnosmenoresde40);

//hay algun alumno de 25 años
let existe = false;
for ( let i=0 ; i< alumnos.length && !existe ; i++ ) { //devuelve true o false
     existe = alumnos[i].edad === 25; //true o false
}
console.log ('existe?' , existe)

//.some () > boolean devuelve true o false

existealumno25god = alumnos.some (alumno => alumno.edad === 25 );
console.log (existealumno25god);

//quiero saber si todos los alumnos tienen 35

let todos = true;
for (let i=0; i<alumnos.length && todos; i++) {
    todos = alumnos [i].edad === 35; //false
}

console.log ('todos', todos);

const todos2 = alumnos.every(alumno => alumno.edad === 35) //que quiero?
console.log ('todos2', todos2);

//quiero solo los nombres de los alumnos uwu

const nombres = []

for (let alumno of alumnos) {
    nombres.push (alumno.nombre);
}
console.log('nombres:',nombres);

//map: funcion f(something) > something
const nombresMap = alumnos.map (alumno => alumno.nombre);
console.log ('nombresmap', nombresMap) 

//reduce
const sumaReduced = alumnos.reduce ((acum,actual) => acum + actual.edad ,0);
console.log ('sumaReduced', sumaReduced);