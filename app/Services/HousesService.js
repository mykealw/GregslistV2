import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
import { sandboxApi } from "./AxiosService.js"

class HousesService {

    async getAllHouses(){
        const res = await sandboxApi.get('houses') 
        // console.log(res, "this the res");
        const houses = res.data.map(h => new House(h))
        ProxyState.houses = houses
        
        
    }



}


export const housesService = new HousesService()