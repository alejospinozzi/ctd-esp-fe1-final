import {combineReducers} from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {TypedUseSelectorHook, useSelector as useReduxSelector,} from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { favoritesReducer, reducer } from "../reducers/reducer";




const rootReducer = combineReducers({
    getCharacters: reducer,
    favorites: favoritesReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;


// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector


export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)) // Aqui aplicaremos los middlewares
)