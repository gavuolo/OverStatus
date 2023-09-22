import overFastApi from "./overFastApi";

export async function getHeroes(string){
    const response = await overFastApi.get(`/heroes?locale=pt-br&role=${string}`)
    return response.data
}

export async function getAllHeroes(){
    const response = await overFastApi.get(`/heroes?locale=pt-br`)
    return response.data
}

export async function getHero(hero){
    const response = await overFastApi.get(`/heroes/${hero}?locale=pt-br`)
    return response.data
}