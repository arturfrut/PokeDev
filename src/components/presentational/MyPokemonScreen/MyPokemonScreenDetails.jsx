import React from 'react'
import pokeTypes from '../visualData/pokeTypes'

export const MyPokemonScreenDetails = () => {
    return (
        <section className = 'MyPokemonScreenDetails'>
            <h5 className = 'GOLD intro'>INTRODUCTION</h5>
            <h3>Poke Id : 123</h3>
            <p>When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.</p>
        
            <div className = 'MyPokemonScreenDetails__types'>
                {/* ACA DEBERIA IR UN MAP CON LOS TIPOS DEL POKEMON */}
                <p><i className = {pokeTypes.fire}></i> &nbsp; &nbsp; <i className = {pokeTypes.grass}></i></p>
            </div>
        </section>
    )
}
