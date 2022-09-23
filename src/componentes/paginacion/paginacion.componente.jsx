import './paginacion.css';
import { useEffect } from "react";
import { loadCharacters, charactersSlice } from "./slices";
import { useAppSelector, useAppDispatch } from "./hooks";

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
    
const Paginacion = () => {

    

    const dispatch = useAppDispatch();

    function nextPage() {
        dispatch(charactersSlice.actions.nextPage());
    }

    function prevPage() {
        dispatch(charactersSlice.actions.prevPage());
    }
    return <div className="paginacion">
        <button onClick={prevPage} className={"primary"}>Anterior</button>
        <button onClick={nextPage} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;