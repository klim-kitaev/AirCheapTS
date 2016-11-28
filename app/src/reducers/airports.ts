import Constants from '../Constants'
import {Airport} from '../models/Airport'
import * as Interfaces from '../models/IAction' 

const airports=(state:Airport[]=[],action:Interfaces.IActionAirportsList)=>{
    switch(action.type){
        case Constants.RECEIVE_AIRPORTS:
            return action.airports;
        default:
            return state;
    }
}

export default airports;