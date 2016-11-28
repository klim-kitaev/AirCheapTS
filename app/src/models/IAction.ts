import {Airport,AirportView} from './Airport'

export interface IAction{
    type:string
}

export interface IActionAirport extends IAction{
    target:string;
    code:string;
}


export interface IActionReceive extends IAction{
    success:boolean
}

export interface IActionReceiveAirports extends IActionReceive{
    airports:Airport[]
}

export interface IDispatch{
    ():void;
}

export interface IDispatchChooseAiport{
    (targer:string, airport:AirportView):void;
}

export interface IActionAirportsList extends IAction{
    airports:Airport[]
}


export interface IRouteState{
    origin:string;
    desctination:string;
}

export interface IState{
    airports:Airport[];
    route:IRouteState;
}

