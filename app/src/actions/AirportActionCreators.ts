import Constants from '../Constants'
import AirCheapAPI from '../api/AirCheapAPI'
import * as Interfaces from '../models/IAction' 
import {Airport,AirportView} from '../models/Airport'

export default class AirportActionCreators{

    // Regular Action creator
    static chooseAirport(target: string, airport:AirportView):Interfaces.IActionAirport{
        return{
            type:Constants.CHOOSE_AIRPORT,
            target:target,
            code:airport ? <string>airport.value : '' 
        }
    }

    private static _requestAirport():Interfaces.IAction{
        return {type:Constants.REQUEST_AIRPORTS}
    }

    private static _recieveAirport(airports:Airport[]):Interfaces.IActionReceiveAirports{
        return {type:Constants.RECEIVE_AIRPORTS,success:true,airports}
    }

    private static _recieveAirportError(error:any):Interfaces.IActionReceive{
        return {type:Constants.RECEIVE_AIRPORTS,success:false}
    }

    // Thunk Action creator
    static fetchAirportsAsync(){
        return (dispatch:any)=>{
            dispatch(this._requestAirport());
            AirCheapAPI.fetchAirports().then(
                (airports)=>dispatch(this._recieveAirport(airports)),
                (error)=>dispatch(this._recieveAirportError(error))
            );
        }
    }

}