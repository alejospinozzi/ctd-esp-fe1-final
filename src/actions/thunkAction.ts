import { Action, ThunkAction } from "@reduxjs/toolkit";
import { getCharacters, getNewPage } from "../services";
import { IRootState } from "../store/store";



export const getAllCharacters = ():ThunkAction<void,IRootState,unknown,Action>=>{
    return async (dispatch) => {
        const data = await getCharacters("")
        dispatch({type: "GET_CHARACTERS", payload: data})
    }
}

export const getFilteredCharacters = (name:string):ThunkAction<void,IRootState,unknown,Action>=>{
    return async (dispatch) => {
        const data = await getCharacters(name)
        dispatch({type: "GET_FILTERED_CHARACTER", payload: data})
    }
}

export const getChangePage = (page:string):ThunkAction<void,IRootState,unknown,Action>=>{
    return async (dispatch) => {
        const data = await getNewPage(page)
        dispatch({type: "GET_NEW_PAGE", payload: data})
    }
}
