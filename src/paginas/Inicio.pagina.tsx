import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import React,{  RefObject, useRef } from "react";
import { useDispatch } from "react-redux";
import { getFilteredCharacters } from "../actions/thunkAction";
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

    const dispatch = useDispatch()
    
    const filter:RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const restartSearch = ():void => {
        if(filter.current!== null){
            filter.current.value=""
        }
        dispatch(getFilteredCharacters(""))
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={()=>{restartSearch()}}>Limpiar Busqueda</button>
        </div>
        <Filtros filter={filter}/>
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio