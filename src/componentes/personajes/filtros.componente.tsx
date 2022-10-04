import { RefObject } from 'react';
import { useDispatch } from 'react-redux';
import { getFilteredCharacters } from '../../actions/thunkAction';
import './filtros.css';


interface props {filter:RefObject<HTMLInputElement>}

const Filtros = ({filter}:props) => {
    const dispatch = useDispatch()

    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input 
        ref={filter}
        type="text" 
        placeholder="Rick, Morty, Beth, Alien, ...etc" 
        name="nombre" 
        id="search"
        onChange={()=>{dispatch(getFilteredCharacters(filter.current!==null ? filter.current.value: ""))}}
        />
    </div>
}

export default Filtros;
