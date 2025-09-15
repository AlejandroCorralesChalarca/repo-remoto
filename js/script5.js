//asincronismo, promesas, callbacks, async await

//Sincronismo: se ejecuta una tarea a la vez, de arriba hacia abajo
console.log("Tarea 1");
console.log("Tarea 2");
console.log("Tarea 3");

//Asincronismo: se pueden ejecutar varias tareas al mismo tiempo, no necesariamente de arriba hacia abajo
mostrarMensaje = (mensaje, funcionCallback) => {
    console.log("mensaje recibido:", mensaje);

    setTimeout(() => {
        funcionCallback();
    });

};

funcionCallback = () => {
    console.log("Callback ejecutado");
}

mostrarMensaje("Hola mundo", funcionCallback);

//promesas: es una forma de manejar el asincronismo, es un objeto que representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

const obtenerNumeroAleatorio = () => {
    return new Promise((resolve, reject) => {
        const numero = Math.random();

        if(numero >= 0.5) {
            resolve(numero);
        } else {
            reject("El número es menor o igual a 0.5");
        }
    })
}

obtenerNumeroAleatorio()
.then((numero) => {
        console.log("Número obtenido:", numero);
    }
)
.catch((error) =>{
        console.error("Error:", error);
})
const obtenerYMostrarNumeroAleatorio = async () =>{

    try {
        const numero = await obtenerNumeroAleatorio();
        console.log("Número obtenido con async/await:", numero);
    } catch (error) {
        console.error("Error con async/await:", error);
    }

};

obtenerYMostrarNumeroAleatorio(); 