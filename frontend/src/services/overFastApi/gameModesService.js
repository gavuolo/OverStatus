import overFastApi from "./overFastApi";

export async function getGameModes(string){
    const response = await overFastApi.get(`/gamemodes?locale=pt-br`)
    return response.data
}
