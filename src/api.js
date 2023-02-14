// criar api.js em src e importar axios
import axios from "axios";

// definir a baseUrl - swagger dbc
const API = axios.create({
    baseURL: 'https://dbc-pessoa-api.herokuapp.com',
})

const APICEP = axios.create({
    baseURL: "https://viacep.com.br/ws",
})

export {API, APICEP};
