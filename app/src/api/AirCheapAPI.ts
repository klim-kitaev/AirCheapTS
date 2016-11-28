import PromiseAjax from '../lib/PromiseAjax'
import {Airport} from '../models/airport'

export default class AirCheapAPI{



    static fetchAirports():Promise<Airport[]>{
        return PromiseAjax.httpGet('https://aircheapapi.pro-react.com/airports')
            .then((response)=>JSON.parse(response)as Airport[])
    }    

}
