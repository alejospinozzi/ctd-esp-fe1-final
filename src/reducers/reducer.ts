import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { ContenedorPadre, Result } from "../types/character";

const contenedorInicial:ContenedorPadre ={
    info:{
        count: 0,
        next:  "",
        pages: 1,
        prev:  "",
    },
    results: [],
}

/**
 * Reducer used to show characters
 * 
 * @author Spinozzi Alejo Marcelo
 * @param {ContenedorPadre} state 
 * @param {AnyAction} action 
 * @returns 
 */

export const reducer:Reducer<ContenedorPadre> = 
(state:ContenedorPadre = contenedorInicial, action: AnyAction) =>{
    switch(action.type){
        case "GET_CHARACTERS":
            return {...action.payload};
        case "GET_FILTERED_CHARACTER":
            return {...action.payload};
        case "GET_NEW_PAGE":
            return {...action.payload};
        default:
            return state;
    }
} 
