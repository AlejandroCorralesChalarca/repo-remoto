//Objetos

let persona = {
    nombre: "Juan",
    edad: 27,
    casado: false,
    hobbies: ["leer", "conducir"]
};
console.log(persona);

persona.ciudad = "Medellin"; //Añadir propiedad
persona.edad = 28; //Modificar propiedad
delete persona.casado; //Eliminar propiedad
console.log(persona);

//ARREGLOS

let colores = ["rojo", "verde", "azul"];
console.log(colores);
console.log(colores[1]); //Acceder a un elemento

//concat
let frutas = ["manzana", "banana"];
let frutas1 = ["naranja", "pera"];
let todasLasFrutas = frutas.concat(frutas1);
console.log(todasLasFrutas);

//includes
console.log(frutas.includes("banana")); //true
console.log(frutas.includes("uva")); //false

//indexOf
console.log(frutas.indexOf("banana")); //1
console.log(frutas.indexOf("uva")); //-1

//push
frutas.push("uva");
console.log(frutas); //["manzana", "banana", "uva"]

//pop
let ultimaFruta = frutas.pop();
console.log(ultimaFruta);
console.log(frutas); //["manzana", "banana"]

//shift
let primeraFruta = frutas.shift();
console.log(primeraFruta);
console.log(frutas); //["banana"]

//unshift
frutas.unshift("fresa");
console.log(frutas); //["fresa", "banana"]

//reverse
frutas.reverse();
console.log(frutas); //["banana", "fresa"]

