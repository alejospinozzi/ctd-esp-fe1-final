import { useDispatch } from 'react-redux';
import { addFavorite } from '../../actions/favoriteAction';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
interface prop {esFavorito: Boolean; onClick?: void;}

const BotonFavorito = ({esFavorito, onClick}:prop) => {

    const dispatch = useDispatch()
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} 
        // onClick={()=>esFavorito ? dispatch(deleteFavorite(favorites.id)):dispatch(addFavorite(favorites))} 
        />
    </div>
}

export default BotonFavorito;