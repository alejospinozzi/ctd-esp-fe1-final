import { Action, ActionCreator } from "@reduxjs/toolkit";
import { ICharacter } from "../../types/character";

export interface UpdateSearchAction extends Action {
    type: "UPDATE_SEARCH";
    search: string;
}

export interface LoadCharacterAction extends Action{
    type: "LOAD_CHARACTERS";
    characters: ICharacter[];
}

export interface AddFavoriteAction extends Action {
    description: any;
    type: "ADD_FAVORITE";
    id: number;
}

export interface DeleteFavoriteAction extends Action {
    type: "DELETE_FAVORITE";
    id: number;
}

export interface DeletingFavoriteAction extends Action {
    type: "DELETING_FAVORITE";
}

export interface DeletingFavoriteErrorAction extends Action {
    type: "DELETING_FAVORITE_ERROR";
    error: string;
}

export const updateSearch: ActionCreator<UpdateSearchAction> = (search: string) => {
    return {
        type: "UPDATE_SEARCH",
        search,
    };
};

export const loadCharacters: ActionCreator<LoadCharacterAction> = (characters: ICharacter[]) => {
    return {
        type: "LOAD_CHARACTERS",
        characters,
    };
};

export const AddFavorite: ActionCreator<AddFavoriteAction> = (id: number) => {
    return {
        type: "ADD_FAVORITE",
        id,
    };
};

export const deleteFavorite: ActionCreator<DeleteFavoriteAction> = (id: number) => {
    return {
        type: "DELETE_FAVORITE",
        id,
    };
};

export const deletingFavorite: ActionCreator<DeletingFavoriteAction> = () => {
    return {
        type: "DELETING_FAVORITE",
    };
};

export const deletingFavoriteError: ActionCreator<DeletingFavoriteErrorAction> = (
    error: string
) => {
    return {
        type: "DELETING_FAVORITE_ERROR",
        error,
    };
};