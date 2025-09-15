//Programacion Funcional

//asignar una funcion a una variable
const sumar = function(a, b) {
    return a + b;
};

console.log(sumar(2, 3)); // Output: 5

//pasar una funcion como argumento a otra funcion
function operar(a, b, funcion) {
    return funcion(a,b)
}

console.log(operar(3, 3, sumar)); // Output: 6

//retornar una funcion como resultado de otra funcion
function multiplicados(numero1){
    return function(numero2){
        return numero1 * numero2;
    }
}

const primerLlamado = multiplicados(2); // Retorna una función que multiplica por 2
console.log(primerLlamado(5)); // Output: 10

//almacenar funciones en estructuras de datos   

const funciones = {
    suma: function(a, b) { return a + b; },
    nombre: 'juan',
    resta: function(a, b) { return a - b; }
};

console.log(funciones.suma(5, 3)); // Output: 5

//funciones puras

//impura
let contador = 0;

function suma1(num){
    contador += num;
    return contador;
}
console.log(suma1(5)); // Output: 5
console.log(suma1(3)); // Output: 8


//pura
function suma2(contador, num){
    return contador + num;
}
console.log(suma2(0, 5)); // Output: 5
console.log(suma2(2, 3)); // Output: 5

//inmutabilidad

let persona = {
    nombre: 'juan',
    edad: 30
};

//directa
persona.edad = 31;
console.log(persona.edad); // Output: 31

//objeto inmutable
let persona2 = Object.freeze ({
    nombre: 'juan',
    edad: 30
});
console.log(persona2.edad); // Output: 30
persona2.edad = 33; // No tiene efecto
console.log(persona2.edad); // Output: 30

//copia inmutable
let persona3 = {
    nombre: 'juan',
    edad: 30
};

const copiaPersona = {...persona3, edad: 47}; // Crea una nueva copia con la edad modificada

console.log(copiaPersona.edad); // Output: 47


//funciones flecha
function saludo(){

}

const saludo2 = () => console.log("hola");

saludo2(); // Output: hola

const sumar2 = (a, b) => a + b;

console.log(sumar2(4, 5)); // Output: 9

//declarativa

// Imperativa
const numeros = [1, 2, 3, 4, 5];
let cuadrados = [];

for (let i = 0; i < numeros.length; i++) {
    cuadrados.push(numeros[i] * numeros[i]);
}

console.log(cuadrados); // Output: [1, 4, 9, 16, 25]

// Declarativa
//  map
const numeros2 = [1, 2, 3, 4, 5];
const cuadrados2 = numeros2.map(num => num * num);
console.log(cuadrados2); // Output: [1, 4, 9, 16, 25]
//  filter
const numeros3 = [1, 2, 3, 4, 5];
const pares = numeros3.filter(num => num % 2 === 0);
console.log(pares);
//  reduce
const numeros4 = [1, 2, 3, 4, 5, 6];
const sumaTotal = numeros4.reduce((acum, num) => acum + num, 0);
console.log(sumaTotal); // Output: 15
//  foreach
const numeros5 = [1, 2, 3, 4, 5, 6];
numeros5.forEach(function(numero,index){
    console.log(`El numero en la posicion ${index} es ${numero}`);
});
//  find
const numeros6 = [1, 2, 3, 4, 5, 6];
const encontrado = numeros6.find(num => num > 3);
console.log(encontrado); // Output: 4
//  some
const numeros7 = [1, 2, 3, 4, 5, 6];
const hayMayoresQue4 = numeros7.some(num => num > 4);
console.log(hayMayoresQue4);



