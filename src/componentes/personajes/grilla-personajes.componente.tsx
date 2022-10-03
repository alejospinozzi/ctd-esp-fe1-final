import './grilla-personajes.css';
import { useEffect } from "react";
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useAppSelector, useAppDispatch } from "./hooks";
import { loadCharacters } from "./slices";

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {
    const { characters, loading, offset, favorite } = useAppSelector(
        (state) => state.todos
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadCharacters());
    }, [offset]);

    const listWithFavorites = characters.filter((character) => favorite.includes(character.id));

    return <div className="grilla-personajes">
        {characters.map((character) => (
            characters.description
            characters.image
            characters.url />
        ))}
    </div>
}
 
export default GrillaPersonajes;