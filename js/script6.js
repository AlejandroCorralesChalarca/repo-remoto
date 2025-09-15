//peticiones HTTP hypertext transfer protocol
//get,post,put,delete: recuperar datos, guardar datos, editar datos, eliminar datos
//json: javascript object notation

//fetch API
//metodo nativo de javascript para hacer peticiones HTTP asincronas
//promesas: pending, fulfilled, rejected
const baseURL = 'https://jsonplaceholder.typicode.com/posts';
fetch(baseURL)
.then((response) => response.json())
.then((datos) => console.log(datos));

//async await

const fetchData = async () => {

    try {
        const response = await fetch(baseURL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error: ', error);
    }
}

fetchData();

//ejemplo

const urlbase = 'https://world.openfoodfacts.net/api/v2';
const endpoint = '/products/737628064502.json';
const url = urlbase + endpoint;
console.log(url);

fetch(url)
.then((response) => response.json())
.then((data) => console.log(data))

//post
const baseURLPost = 'https://jsonplaceholder.typicode.com';
const endpointPost = '/posts/1';
const urlPost = baseURLPost + endpointPost;
console.log(urlPost);

const datosPost = {
    title: 'Hola he sido modificado',
    body: 'Este body es diferente al body de la peticion',
    userId: 1
}

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosPost)
}

fetch(urlPost,options)
.then((response) => response.json())
.then((data) => console.log(data))

//datos a enviar

const options2 = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosPost)
}

fetch(urlPost,options2) 
.then((response) => response.json())
.then((data) => console.log(data))

//delete

const options3 = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
}

fetch(urlPost,options3)
.then((response) => response.json())
.then((data) => console.log(data))
