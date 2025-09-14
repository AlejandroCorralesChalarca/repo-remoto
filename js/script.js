// variables
let nombre_persona = [  "Juan", "Pedro", "Maria", "Ana"  ];

//console.log("Hola, " + nombre_persona);

// SCOPE de las variables

//SCOPE GLOBAL
let global = "soy global";

//function mlFunction() {
  //  console.log(global, nombre_persona);
//}

//mlFunction();

//SCOPE LOCAL

function mlLocal() {
    let local = "soy local";
    console.log(local);
}

mlLocal();

//console.log(local); // da error porque no existe en este SCOPE    

//SCOPE por bloque
if (true) {
    let bloque = "soy bloque";
    console.log(bloque);
}

//declaracion variable

var edad = 20;

if(edad >= 18) {
    var esAdulto = true; // var no tiene scope de bloque
}
console.log(esAdulto); // true

let blocke = "variable de bloque";
const constante = "variable constante";

