//aplicacion integradora para aprender del domm

const obtenerValorInput = () => {
    let inputTexto = document.getElementById("inputPais");
    let valor = inputTexto.value;
    peticionApi(valor);
}

const peticionApi = (pais) => {
    const baseURL = "https://restcountries.com/v3.1/";
    const endpoint = `name/${pais}`;
    const url = `${baseURL}${endpoint}`;

    axios.get(url)
    .then(res => printData(res.data))
    .catch(err => console.log(err))
}

const printData = (data) => {
    let respuesta = document.getElementById("show-info");
    respuesta.innerHTML = `
    <span>${data[0]['flag']}</span>
    <label><h3>${data[0].name.common}</h3></label>
    <label><h3>${data[0]['capital']}</h3></label>
    <label><h3>${data[0]['population']}</h3></label>
    `
}