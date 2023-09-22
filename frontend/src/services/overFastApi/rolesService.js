import overFastApi from "./overFastApi";

export async function getRoles(){
    const response = await overFastApi.get('/roles?locale=pt-br')
    return response.data
}
