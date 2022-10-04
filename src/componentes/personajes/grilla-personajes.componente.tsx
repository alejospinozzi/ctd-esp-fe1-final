import './grilla-personajes.css';
import { useEffect } from "react";
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useDispatch } from 'react-redux';
import { getAllCharacters } from '../../actions/thunkAction';
import { useSelector } from '../../store/store';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getAllCharacters())
    },[])

    const personajes = useSelector(store =>{
        return store.getCharacters.results})
    

    return <div className="grilla-personajes">
        {personajes?.map((character) => (
            <TarjetaPersonaje character={character}/>
        ))} 
    </div>
}

export default GrillaPersonajes;