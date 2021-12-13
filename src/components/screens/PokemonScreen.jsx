import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//components
import AboutPokemon from '../presentational/PokemonScreen/AboutPokemon';
import PruebaModificarPokemon from '../presentational/PokemonScreen/PruebaModificarPokemon';
import PruebaMovimientos from '../presentational/PokemonScreen/PruebaMovimientos';
//context
import PokemonContext from "../context/PokemonContext";
//initPokemon
import PokemonInitPokemon from "../initializerJSON/pokemonInitJSON";
//style
import "../../styles/components/PokemonScreen.css";
import StatsPokemon from '../presentational/PokemonScreen/StatsPokemon';
import MoviEvoPokemon from '../presentational/PokemonScreen/MoviEvoPokemon';
import { MyFormulario } from '../presentational/MyPokemonScreen/pruebaFormulario';

export const PokemonScreen = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState(PokemonInitPokemon)

    const [evoluciones, setEvoluciones] = useState({ name: [], id: [] });


    const obtenerPokemon = async (id) => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        const dataJSON = await data.json();
        setPokemon(dataJSON);
    }

    useEffect(() => {
        let evolucionesNameArray = [];

        async function obtenerIdEvolutionPokemon() {
            let i = 0;
            let evolucionesIdArray = [];
            let leng = evolucionesNameArray.length;
            for (; i < leng; i++) {
                let data = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + evolucionesNameArray[i])
                let dataJSON = await data.json();
                evolucionesIdArray.push(dataJSON.id);
            }
            setEvoluciones({
                name: evolucionesNameArray,
                id: evolucionesIdArray
            });

        }

        async function obtenerNameEvolutionPokemon(id) {
            let data = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + id)
            let dataJSON = await data.json();
            if (dataJSON.evolution_chain.url) {
                data = await fetch(dataJSON.evolution_chain.url)
                dataJSON = await data.json();
                if (dataJSON.chain) {
                    evolucionesNameArray.push(dataJSON.chain.species.name);
                    if (dataJSON.chain.evolves_to[0]) {
                        evolucionesNameArray.push(dataJSON.chain.evolves_to[0].species.name);
                        if (dataJSON.chain.evolves_to[0].evolves_to[0]) {
                            evolucionesNameArray.push(dataJSON.chain.evolves_to[0].evolves_to[0].species.name);
                            if (dataJSON.chain.evolves_to[0].evolves_to[0].evolves_to[0]) {
                                evolucionesNameArray.push(dataJSON.chain.evolves_to[0].evolves_to[0].evolves_to[0].species.name);
                            }
                        }
                    }
                    obtenerIdEvolutionPokemon();
                }
            }
        }
        obtenerPokemon(id);
        obtenerNameEvolutionPokemon(id);
    }, [id]);

    return (
        <>
            <h3>PokemonScreen</h3>
            <h4>id: {pokemon.id}</h4>
            <PokemonContext.Provider value={pokemon}>
                <AboutPokemon />
                <StatsPokemon />
                <MoviEvoPokemon evoluciones={evoluciones} /> 
                <MyFormulario />  
                <PruebaMovimientos/>
                <PruebaModificarPokemon setPokemon={setPokemon}/>
                {/* <HeaderPokemon />
            <AtaquesPokemon />
            <EnergiaPokemon /> */}
            </PokemonContext.Provider>
        </>
    )
}

export default PokemonScreen;