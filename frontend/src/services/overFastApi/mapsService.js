import overFastApi from "./overFastApi";

export async function getMaps(string){
    const response = await overFastApi.get(`/maps?locale=pt-br`)
    return response.data
}