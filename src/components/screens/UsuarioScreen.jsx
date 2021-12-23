import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
//componets
import Nav from '../nav/nav_principal';
import { Link } from "react-router-dom";
import Spinner from '../img/spinner5.gif';
//style
import "../../styles/components/UsuarioScreen.css";
import EditUserFromix from "../presentational/UsuarioScreen/EditUserFromix"
import MostrarPokemones from "../presentational/UsuarioScreen/MostrarPokemones"
import pokeball from '../../components/img/PokeImgs/PokeBall.png'

export const UsuarioScreen = () => {
    const { id } = useParams();
    const [user, setUser] = useState({ name: "", email: "", pass: "", pokemons: [] });
    const [editarUsuario, setEditarUsuario] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const [userId, setUserId] = useState('')

    useEffect(() => {
        setSpinner(true);
        const obtenerUsers = async () => {
            /* const data = await fetch("https://pokeapi.co/api/v2/move/" + id); */
            const data = await fetch("http://localhost:4000/user/" + id);
            const dataJSON = await data.json();
            setUser(dataJSON);
            console.log(dataJSON);
            setSpinner(false);
            let userId = localStorage.getItem('id')
            setUserId(userId)
        }
        obtenerUsers();

    }, [id, editarUsuario])

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

    return (
        <>
            <Nav cambiar = {editarUsuario} />
            {spinner === true && spinnerOn()}
            {spinner === false && <div className='UsuarioScreen'>
                {editarUsuario === false && <>
                    <div className='UsuarioScreen__Card'>
                        <div className='UsuarioScreen__list'>
                            <div className="UsuarioScreen__dato">ID:</div>
                            <div className="UsuarioScreen__dato">{id}</div>
                        </div>
                        <div className='UsuarioScreen__list'>
                            <div className="UsuarioScreen__dato">Name:</div>
                            <div className="UsuarioScreen__dato">{user.name}</div>
                        </div>
                        <div className='UsuarioScreen__list'>
                            <div className="UsuarioScreen__dato">Email:</div>
                            <div className="UsuarioScreen__dato">{user.email}</div>
                        </div>
                        <div className='UsuarioScreen__list'>
                            <div className="UsuarioScreen__dato">Password:</div>
                            <div className="UsuarioScreen__dato">{userId === id ? user.pass : '**********' }</div> 
                            
                        </div>
                    </div>
                    <div className='flex-centerAll'>
                        <Link to={"/users/"}><button className="btn">BACK</button></Link>
                        {userId === id && <button className="btn" onClick={() => setEditarUsuario(true)}>EDIT</button> }
                        <img src={pokeball} alt="pokeBall" className='pokeBallBg UsuarioScreen__pokeball' />
                    </div>
                    <div className="UsuarioScreen__Contratos">
                        <h4>Contracted Pokemon</h4>
                        <div className="Contratos__container">
                            <MostrarPokemones pokemons={user.pokemons} />
                        </div>
                    </div>
                </>}
                {editarUsuario === true && <>
                    <div className="MovimientosAllScreen__AddMoveAll">

                        <EditUserFromix user={user} setEditarUsuario={setEditarUsuario} />


                        <button className="btn btn-form" type="submit" onClick={() => { setEditarUsuario(false) }}>Back</button>
                    </div>
                </>}
            </div>
            }
        </>
    )
}

export default UsuarioScreen;