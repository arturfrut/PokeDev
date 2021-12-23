
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
//components
import { obtenerClassType } from "../presentational/visualData/Types";
import { useParams } from 'react-router';
import Spinner from '../img/spinner5.gif';

//styles
import "../../styles/components/MovimientoScreen.css";
import Nav from '../nav/nav_principal';
import EditMove from "../presentational/MovimientoScreen/EditMove"
import pokeball from '../../components/img/PokeImgs/PokeBall.png'

export const MovimientoScreen = () => {
    const { id } = useParams();
    const [move, setMove] = useState({ id: "", power: "0", type: { name: "" } });
    const [pagNext, setPagNext] = useState(826);
    const [pagBack, setPagBack] = useState(1);
    const [spinner, setSpinner] = useState(true);
    const [editMoves, setEditMoves] = useState(false);
    const [cantMoves, setCantMoves] = useState(826);


    useEffect(() => {
        setSpinner(true);
        const obtenerMove = async () => {
            /* const data = await fetch("https://pokeapi.co/api/v2/move/" + id); */
            const data = await fetch("http://localhost:4000/movesOne/" + id);
            const dataJSON = await data.json();
            setMove(dataJSON);
            setSpinner(false);
        }
        const obtenerCantMove = async () => {
            /* const data = await fetch("https://pokeapi.co/api/v2/move/" + id); */
            const data = await fetch("http://localhost:4000/movescant");
            const dataJSON = await data.json();
            setCantMoves(dataJSON.cant);
        }
        obtenerMove();
        obtenerCantMove();
        if (parseInt(id) > 1) {
            setPagBack(parseInt(id) - 1);
        }
        if (parseInt(id)< cantMoves) {
            setPagNext(parseInt(id) + 1);
        }
    }, [id, editMoves, cantMoves])

    const spinnerOn = () => {
        return (
            <div className="flex-centerAll">
                <div className="spinner">
                    <div className="spinner__fondo"></div>
                    <img className='spinner__imagen' src={Spinner} alt="foto" />
                </div>
            </div>
        );
    }
    const spinnerOff = () => {
        return (
            <div className="MovimientoScreen">
                {editMoves === false &&
                    <>
                        <img src={pokeball} alt="pokeBall" className='pokeBallBg' />
                        <div className="MovimientoScreen__sup flex-centerAll">
                            <Link className="text-decore-none" to={"/moves/"}><button className="btn" >Back</button></Link>
                            <button className='btn' onClick={() => setEditMoves(true)} >Edit move</button>
                        </div>
                        <ul className="MovimientoScreen__ul">
                            <ul className="MovimientoScreen__ul__ul">
                                <li className="MovimientoScreen__li flex-align-center">ID:</li>
                                <li className="MovimientoScreen__li MovimientoScreen_flexRight" >{move.id}</li>
                            </ul>
                            <ul className="MovimientoScreen__ul__ul">
                                <li className="MovimientoScreen__li flex-align-center">Name:</li>
                                <li className="MovimientoScreen__li MovimientoScreen_flexRight" >{move.name}</li>
                            </ul>
                            <ul className="MovimientoScreen__ul__ul">
                                <li className="MovimientoScreen__li flex-align-center">TYPE-NAME:</li>
                                <li className="MovimientoScreen__li MovimientoScreen_flexRight" ><i>{move.type.name}</i>
                                </li>
                            </ul>
                            <ul className="MovimientoScreen__ul__ul">
                                <li className="MovimientoScreen__li flex-align-center">TYPE:</li>
                                <li className="MovimientoScreen__li MovimientoScreen_flexRight" >
                                    <i className={obtenerClassType(move.type.name)}></i>
                                </li>
                            </ul>
                            <ul className="MovimientoScreen__ul__ul">
                                <li className="MovimientoScreen__li flex-align-center">POWER:</li>
                                <li className="MovimientoScreen__li MovimientoScreen_flexRight" >{move.power}</li>
                            </ul>
                        </ul>
                        <div>
                            <Link className="text-decore-none" to={"/moves/" + pagBack}><button className="btn" >Previous</button></Link>
                            <Link className="text-decore-none" to={"/moves/" + pagNext}>  <button className="btn" >Next</button></Link>
                        </div>
                    </>}
                    {editMoves === true && <>
                        <div className="MovimientoScreen__Edit">
                    <EditMove move={move} setMove={setMove} id={id} setEditMoves={setEditMoves}  />
                    <button className="btn btn-form" type="submit" onClick={() => { setEditMoves(false) }}>Back</button>
                </div>
            </>}
            </div>
        );
    }
    return (
        <>
            <Nav />
            {spinner === true && spinnerOn()}
            {spinner === false && spinnerOff()}
            <></>
        </>

    )
}

export default MovimientoScreen;