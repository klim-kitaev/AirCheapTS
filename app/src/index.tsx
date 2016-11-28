import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, connect } from 'react-redux';
import aircheapStore from './store/aircheapStore';
import Select=require('react-select');
import AirportActionCreators from './actions/AirportActionCreators';
import {Airport,AirportView} from './models/Airport';
import * as Interfaces from './models/IAction' 


interface IAppComponentProps {
    airports:AirportView[],
    origin:string,
    destination:string,
    fetchAirports:Interfaces.IDispatch,
    onChooseAirport:Interfaces.IDispatchChooseAiport
};

interface IAppComponentState {};

class AppComponent extends React.Component<IAppComponentProps, IAppComponentState> {

    componentDidMount() {
        this.props.fetchAirports();
    }


    


    public render(): JSX.Element {
        return (<div>
            <header>
                <div className="header-brand">
                    <img src="logo.png" height="35"/>
                    <p>Check discount ticket prices and pay using your AirCheap points</p>
                </div>
                <div className="header-route">
                    <Select
                            name="origin"
                            value={this.props.origin}
                            options={this.props.airports}
                            onChange={this.props.onChooseAirport.bind(this,'origin')}
                        />
                        <Select
                            name="destination"
                            value={this.props.destination}
                            options={this.props.airports}
                            onChange={this.props.onChooseAirport.bind(this,'destination')}
                        />
                </div>
            </header>
        </div>);
    }
}

const mapStateToProps=(state:Interfaces.IState)=>(
    {
        airports:state.airports.map(airport=>({
            value:airport.code,
            label:`${airport.city} - ${airport.country} (${airport.code})`
        }as AirportView )
        ),
        origin:state.route.origin,
        destination:state.route.desctination
    }
);

const mapDispathToProps=(dispatch:any)=>(
    {
        fetchAirports:()=>dispatch(AirportActionCreators.fetchAirportsAsync()),
        onChooseAirport:(target:string,airport:AirportView)=>(dispatch(AirportActionCreators.chooseAirport(target,airport)))
    }
)

const AppContainer=connect(mapStateToProps,mapDispathToProps)(AppComponent);


ReactDOM.render(
    <Provider store={aircheapStore}>
    <AppContainer />
    </Provider>,
    document.getElementById("example")
);