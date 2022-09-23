export interface ICharacter{
    id: number;
    image: string;
    description: string;
}

export type FavoriteContextType = {
    favorites: ICharacter[];
    saveFavorite: (character: ICharacter) => void;
};