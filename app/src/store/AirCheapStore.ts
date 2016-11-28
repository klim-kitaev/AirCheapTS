import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';


const logger=(store:any)=>(next:any)=>(action:any)=>{
    if(typeof action!="function"){
        console.log('dispatching: ',action);
    }
    return next(action);
}

const aircheapStore=createStore(
    reducers,
    applyMiddleware(logger,thunk)
);

export default aircheapStore;