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

const sumarFlecha = (a, b) => a + b;