import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { Result } from "../types/character";
import { useDispatch, useSelector } from "react-redux";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    // const favorites:Result[] = useSelector(store => store)
    const dispatch = useDispatch()

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Limpiar Favoritos</button>
        </div>
        <GrillaPersonajes />
    </div>
}

export default PaginaFavoritos