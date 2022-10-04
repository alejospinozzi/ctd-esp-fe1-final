import './grilla-personajes.css';
import { useEffect } from "react";
import TarjetaPersonaje from './tarjeta-personaje.componente';
// import { useAppSelector, useAppDispatch } from "../../hooks";
import { useDispatch } from 'react-redux';
import { getAllCharacters } from '../../actions/thunkAction';
import { useSelector } from '../../store/store';
import { log } from 'console';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {
    // const { characters, loading, offset, fav } = useAppSelector(
    //     (state) => state.todos
    // );

    // const dispatch = useAppDispatch();
    
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(loadCharacters());
    // }, [offset]);

    useEffect(() =>{
        dispatch(getAllCharacters())
    },[])

    const personajes = useSelector(store =>{
        return store.getCharacters.results})
    

    return <div className="grilla-personajes">
        {personajes?.map((character) => (
            <TarjetaPersonaje element={character}/>
        ))} 
    </div>
}

export default GrillaPersonajes;