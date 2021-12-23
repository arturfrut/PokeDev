
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//styles
import "../../styles/components/nav_principal.css";

// import Intro from '../audio/intro.mp3'
// import { Howl, Howler } from "howler";
// import { useState } from "react";


function Nav({ cambiar }) {
    
    const [active, setActive] = useState(false)
    function showLinks() {
        if (active) {
            setActive(false);
        }
        else {
            setActive(true);
        }
    }

    const [storage, setStorage] = useState({
        name: '',
        route: ''
    })


    useEffect(() => {
        let name = localStorage.getItem('user');
        let route = `/users/${localStorage.getItem('id')}`
        setStorage({
            name: name,
            route:route
        })
    },[ cambiar ])

    return (
        <nav className="nav_principal">
            <div className="nav_principal__icono"></div>
            <button onClick={showLinks} className="btn-hamburger"><i id="hamburger" className={active === false ? 'fas fa-bars' : 'fas fa-times'}></i></button>
            <ul id="nav-links" className={active === false ? 'nav_principal__list' : 'nav_principal__list active'} >
                <li className="nav_principal__li"><Link to="/home" className="nav_principal__a">Pokemons</Link></li>
                <li className="nav_principal__li"><Link to="/moves" className="nav_principal__a">Moves</Link></li>
                <li className="nav_principal__li"><Link to="/users" className="nav_principal__a">Users</Link></li>
                <li className="nav_principal__li"><Link to= {storage.route} className="nav_principal__a">{storage.name}</Link></li>
                <li className="nav_principal__li"><Link to="/" className="nav_principal__a">Sign off</Link></li>
                {/* <li className="nav_principal__li"><button onClick={playMusic} type="button" className="nav_principal__a nav_principal__btn-music" ><i className="fas fa-music"></i></button></li> */}
            </ul>
        </nav>
    )
}


export default Nav;