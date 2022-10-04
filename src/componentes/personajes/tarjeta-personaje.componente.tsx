import { Result } from '../../types/character';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
interface props {element: Result}

const TarjetaPersonaje = ({element}:props) => {

    return <div className="tarjeta-personaje">
        <img src={element.image} alt={element.name}/>
        <div className="tarjeta-personaje-body">
            <span>{element.name}</span>
            <BotonFavorito esFavorito={false}/>
        </div>
    </div>
}

export default TarjetaPersonaje;