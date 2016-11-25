import Constants from '../Constants'
import Airport from '../models/Airport'
import * as Interfaces from '../models/IAction' 
import update from 'react-addons-update'

const initialState:Interfaces.IRouteState={
    origin:'',
    desctination:''
};

const route=(state:Interfaces.IRouteState=initialState,action:Interfaces.IActionAirport)=>{
    switch(action.type){
        case Constants.CHOOSE_AIRPORT:
            return update(state,{[action.target]:{$set:action.code}})
        default:
            return state;
    }
}

export default route;