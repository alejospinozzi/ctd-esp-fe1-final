import { Result } from "../types/character";
import {FavoriteAction} from "../types/character"

export const addFavorite =(favorite:Result):FavoriteAction => {
    return{
        type:"ADD_FAVORITE", payload: favorite
    }
}

export const deleteFavorite =(id:number):FavoriteAction => {
    return{
        type:"DELETE_FAVORITE", id: id
    }
}