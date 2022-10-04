import './paginacion.css';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../store/store';
import { getChangePage } from '../../actions/thunkAction';


/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
    
const Paginacion = () => {

    const dispatch = useDispatch()

    const page= useSelector( store =>{return store.getCharacters.info})

    return<div>
        <button disabled={page.prev === null} onClick={()=> dispatch(getChangePage(page.prev))} className={"primary"}>Anterior</button>
        <button disabled={page.next === null} onClick={()=> dispatch(getChangePage(page.next))} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;