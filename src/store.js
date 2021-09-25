import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/userReducer'
//Note:- when using more reducers , use proper combine methods like persistCombineReducers()
//To use this method add redux-persist package also...

const initalState = {

}

const middleware = [thunk];
const composeEnhancer=window._Redux_DEVTOOLS_EXTENSION_COMPOSE_|| compose //Composing Enhancer
const store  = createStore(rootReducer,composeEnhancer(applyMiddleware(...middleware)));

export default store;