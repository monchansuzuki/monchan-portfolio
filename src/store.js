import {createStore,applyMiddleware,combineReducers} from 'redux'
import {logger} from 'redux-logger'
import {MenuReducer} from "./reducer/MenuReducer";
import { reducerCatalogue } from './reducer/Catalogue'


const reducer = combineReducers({
    MenuReducer : MenuReducer,
    CataReducer : reducerCatalogue
})
export const Store = createStore(reducer,applyMiddleware(logger))

