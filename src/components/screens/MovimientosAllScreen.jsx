import React, { useEffect, useState } from 'react';
//components
import MostrarMovimientos from '../presentational/MovimientosAllScreen/MostrarMovimientos'
//styles
import "../../styles/components/MovimientosAllScreen.css";
export const MovimientosAllScreen = () => {
    const [filtro, setFiltro] = useState("");
    const [movesAll, setmovesAll] = useState([]);
    const cantMovesFetch = 826;

    const handleChange = (evt) => {
        setFiltro(evt.target.value);

    }

    useEffect(() => {
        const obtenerMovimientos = async (id) => {
            const data = await fetch("https://pokeapi.co/api/v2/move/?offset=0&limit=" + cantMovesFetch);
            const dataJSON = await data.json();
            setmovesAll(dataJSON.results);
        }
        obtenerMovimientos();
    }, []);

    return (
        <div className="MovimientosAllScreen">
        <input className="MovimientosAllScreen__input" type="text" value={filtro} onChange={handleChange} name="filtro" placeholder="Seach Move" />
                <MostrarMovimientos movesAll={movesAll} filtro={filtro}/>
        </div>
    )
}
