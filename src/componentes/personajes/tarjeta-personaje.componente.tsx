import { Result } from '../../types/character';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * @param {Result} character
 * @returns un JSX element 
 */
interface props {character: Result}

const TarjetaPersonaje = ({character}:props) => {

    return <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito esFavorito={false}/>
        </div>
    </div>
}

export default TarjetaPersonaje;