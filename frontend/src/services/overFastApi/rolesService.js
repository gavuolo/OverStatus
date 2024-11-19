import axios from "axios";
import overFastApi from "./overFastApi";

export async function getRoles(){
    const response = await overFastApi.get('/roles?locale=pt-br')
    return response.data
}

export async function getSvg(string) {
    const response = await axios.get(`${string}`)
    return response.data
}