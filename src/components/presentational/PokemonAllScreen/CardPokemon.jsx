import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
//inicializador pokemon
import pokemonInit from '../../initializerJSON/pokemonInitJSON';
//style
import pokeTypes from '../../presentational/visualData/pokeTypes';
//icon types
import '../../../styles/components/pokeTypes.css'
//style icon types

import "../../../styles/components/CardPokemon.css"
function CardPokemon({ name, url }) {
    let id = 1;
    let arrayURL = url.split('/');
    if (arrayURL[6]) {
        id = arrayURL[6];
    }
    const imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + id + ".svg";
    const [pokemon, setPokemon] = useState(pokemonInit)
    useEffect(() => {
        obtenerPokemon(id);
    }, [id]);

    const obtenerPokemon = async (id) => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        const dataJSON = await data.json();
        setPokemon(dataJSON);
    }

    const sincronizarPokemonIcono = () =>{     //falta desarrollar
        let iconoPoke;
        for (const property in pokeTypes) {
          if(pokemon.types[0].type.name  == property){
            iconoPoke = property;
          }
        }
        
    }
    return (
      <Link to={"/pokemon/" + id}>
        <div className="contenedor1">
          <div className="contenedor2">
            <div className="CardPokemon">
              <img className="CardPokemon__img" src={imgSrc} alt="imagen" />
              <h5 className="GOLD">HI THERE! I'M </h5>
              <h3 className="CardPokemon__name">
                <span className="MyPokemonScreenHeader__blink">[</span> {name}{" "}
                <span className="MyPokemonScreenHeader__blink">]</span>
              </h3>
              <p>Tipo: {pokemon.types[0].type.name} <i className={pokeTypes.fire}></i></p>
            </div>
          </div>
        </div>
      </Link>
    );
}

export default CardPokemon;