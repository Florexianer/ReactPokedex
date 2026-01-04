import React, { useCallback } from 'react'

import { useState, useEffect } from 'react'

import PokeCard from './PokeCard'
import axios from 'axios'
import { debounce } from 'lodash';

function PokeList({ filterString }) {
    const [pokemons, setPokemons] = useState([]);

    const readPokemons = () => {
        const fetchPokemon = async () => {
            const data = await axios.get("https://pokemon-service-ucql.onrender.com/api/v1/pokemon/search?name=" + filterString);
            setPokemons(data.data);
        }

        fetchPokemon();
    };


    const debounceRead = useCallback(debounce(readPokemons, 300), []);

    useEffect(() => {
        debounceRead();
        console.log(filterString)
    }, [filterString])



    return (
        <>
            <div className="flex flex-wrap py-5 px-20">
                {pokemons.map((pokemon) => (
                    <PokeCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </>
    )
}

export default PokeList
