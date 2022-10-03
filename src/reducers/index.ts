import { Reducer } from "redux";
import { ICharacter } from "../../types/character";
import {
    AddFavoriteAction,
    DeleteFavoriteAction,
    DeletingFavoriteAction,
    DeletingFavoriteErrorAction,
    LoadCharacterAction,
    UpdateSearchAction
} from "../actions";

export type FavoritesState = {
    favorites: ICharacter[];
    deleting: boolean;
    error: string;
};

const initialState: FavoritesState = { favorites: [], deleting: false, error: "" };

const characterReducer: Reducer<
FavoritesState,
    | UpdateSearchAction
    | AddFavoriteAction
    | LoadCharacterAction
    | DeleteFavoriteAction
    | DeletingFavoriteAction
    | DeletingFavoriteErrorAction
> = (state = initialState, action): CharactersState => {
    switch (action.type) {
    case "ADD_FAVORITE": {
        return {
            ...state,
            favorites: [
                ...state.favorites,
                { description: action.description, id: new Date().getTime() },
            ],
        };
    }
    case "LOAD_CHARACTERS": {
        return {
            ...state,
            characters: action.characters,
        };
    }
    
    case "DELETING_FAVORITE": {
        return {
            ...state,
            deleting: true,
        };
    }
    case "DELETING_FAVORITE_ERROR": {
        return {
            ...state,
            deleting: false,
            error: action.error,
        };
    }
        default:
        return state;
    }
};

export default characterReducer;