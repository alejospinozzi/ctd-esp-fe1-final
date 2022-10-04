import { Result } from "../types/character";
import {FavoriteAction} from "../types/character"

export const addFavorite =(favorite:Result):FavoriteAction => {
    return{
        type:"ADD_FAVORITE", payload: favorite
    }
}

export const removeFavorite =(id:number):FavoriteAction => {
    return{
        type:"REMOVE_FAVORITE", id: id
    }
}