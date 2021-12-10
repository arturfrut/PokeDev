import React from 'react'
//import {pokemon from '../mocks/pokemonData'
import '../../styles/components/pokeTypes.css'
import pokeTypes from './visualData/pokeTypes';
import UsePokemon from "../context/usePokemon";  /* Entrada de datos pokemon*/ 



export const CallDataExample = () => {
    const pokemon = UsePokemon();       //Le pasamos la funcion
    return (
        <div>
            <p>Nombre pokemon:  {pokemon.name}</p>
            <p>Id Pokemon:  {pokemon.id}</p>
            <p>Descripcion</p>
            <p>Tipos:  {pokemon.types[0].type.name}</p>
            <p>Ataque:  {pokemon.stats[1].base_stat}</p>
            <p>Defensa:  {pokemon.stats[2].base_stat}</p>
            <p>Defensa esp:  {pokemon.stats[4].base_stat}</p>
            <p>Speed:  {pokemon.stats[5].base_stat}</p>
            <p>HP:  {pokemon.stats[0].base_stat}</p>
            <p>Total</p>
            <p>Location:  {pokemon.location_area_encounters}</p>
            <p>evolution xxxxxxxxx</p>   
            <i className={pokeTypes.fire}></i>
            <i className={pokeTypes.water}></i>
            <i className={pokeTypes.electric}></i>
            <i className={pokeTypes.ground}></i>
            <i className={pokeTypes.grass}></i>
            <i className={pokeTypes.ghost}></i>
            <i className={pokeTypes.fly}></i>
            <i className={pokeTypes.bug}></i>
            <i className={pokeTypes.normal}></i>
            <i className={pokeTypes.fighting}></i>
            <i className={pokeTypes.steel}></i>
            <i className={pokeTypes.dragon}></i>
            <i className={pokeTypes.poison}></i>
            <i className={pokeTypes.ice}></i>
        </div>
    )
}
