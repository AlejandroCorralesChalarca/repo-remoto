//OPERADORES LOGICOS Y ESTRUCTURAS DE CONTROL

// if-else
let edad = 12;  
if (edad >= 18) {
    console.log("Eres mayor de edad.");
}
else {
    console.log("Eres menor de edad.");
}

//condicional ternario

edad >= 18 ? console.log("Eres mayor de edad.") : console.log("Eres menor de edad.");

//else-if
let puntaje = 75;

if(puntaje >= 90) {
    console.log("Excelente");
}
else if(puntaje >= 75) {
    console.log("Muy bien");
}
else if(puntaje >= 50) {
    console.log("Bien");
}
else {
    console.log("Necesitas mejorar");
}

//bucles - loops

//for
for(let i = 0; i <= 5; i++) {
    console.log("Iteración número: " + i);
}

//while
let contador = 0;
while(contador < 3) {
    console.log("Contador es: " + contador);
    contador++;
}

//switch-case
let diaSemana = "Miércoles";

switch(diaSemana) {
    case "Lunes":
        console.log("Hoy es lunes.");   
        break;
    case "Martes":
        console.log("Hoy es martes.");
        break;  
    case "Miércoles":
        console.log("Hoy es miércoles.");
        break;
    default:
        console.log("No es lunes, martes ni miércoles.");
        break;
}

//try-catch
try {
    let resultado = 10 / 0;
    console.log("Resultado: " + resultado);
}catch(error){
    console.log("Error: División por cero.");
}

//operadores lógicos- and (&&), or (||), not (!)

//and (&&)
let a = true;
let b = false;
console.log("a AND b: " + (a && b)); // AND

//or (||)
let c = false;
console.log("a OR c: " + (a || c)); // OR

//not (!)
console.log("NOT a: " + (!a)); // NOT

//comparador de igualdad (==) y estrictamente igual (===)

console.log(5 == 5); // true
console.log(5 == 10); // false

console.log(5 === '5'); // false
console.log(5 === 5); // true

//comparador de desigualdad (!=) y estrictamente desigual (!==)

console.log(5 != 10); // true
console.log(5 != "5"); // false

console.log(5 !== '5'); // true
console.log(5 !== 5); // false

//comparadores mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=)

console.log(10 > 5); // true
console.log(5 < 10); // true
console.log(5 >= 5); // true
console.log(3 <= 2); // false   

