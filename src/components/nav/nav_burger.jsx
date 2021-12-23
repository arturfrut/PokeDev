import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'


export const Nav_burger = () => {

    const showSettings = (event) => {
        event.preventDefault();
    }
    
    const [storage, setStorage] = useState({
        name: '',
        route: ''
    })


    useEffect(() => {
        let name = localStorage.getItem('name');
        let route = `/users/${localStorage.getItem('id')}`
        setStorage({
            name: name,
            route:route
        })
    },[])


    

    return (
        <nav className="nav_principal">
            <ul className="nav_principal__ul">
                <Menu>
                    <div className="nav_principal__icono" onClick={showSettings}></div>
                    <Link to="/home" className="nav_principal__a">Pokemones</Link>
                    <Link to="/moves" className="nav_principal__a">Moves</Link>
                    <Link to="/users" className="nav_principal__a">Users</Link>
                    <Link to= {storage.route} className="nav_principal__a">{storage.name} asldkjasd</Link>
                    <Link to="/" className="nav_principal__a">Log out</Link>
                </Menu>
            </ul>
        </nav>
    )
}

export default Nav_burger;