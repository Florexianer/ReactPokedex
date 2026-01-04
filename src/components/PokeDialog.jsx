import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaX } from 'react-icons/fa6'
import { getColorForType } from '../libraries/Library';

function PokeDialog({ pokemon, closeDialog }) {
    console.log(pokemon)

    const [species, setSpecies] = useState({});

    useEffect(() => {
        const fetchSpeciesData = async () => {

            const data = await axios.get(pokemon.species.url);
            setSpecies(data.data);
        }
        if (Object.keys(species).length === 0) {
            fetchSpeciesData();
        }
    }, [])


    return (
        <div className="absolute top-0 left-0 w-full h-screen bg-transparent flex items-center justify-center" onClick={closeDialog}>
            <div className="w-1/2 h-1/2 absolute border bg-white z-50 rounded-2xl">
                <div className='flex justify-between h-8 px-2 bg-gray-900 rounded-2xl text-white items-center'>
                    <div>

                    </div>
                    <FaX className='cursor-pointer w-2' onClick={closeDialog} />
                </div>
                <div className='px-8 bg-gray-300 h-fit'>
                    <div class="flex pt-3">
                        <img className="h-40 border-2 rounded-3xl bg-white"
                            src={pokemon.sprites ? pokemon.sprites.other["official-artwork"]["front_default"] : null} />
                        <div className='ml-3'>
                            <div className="capitalize text-2xl font-medium">
                                {pokemon.name}
                            </div>
                            <div className='flex'>
                                {pokemon.types.map(type => (
                                    <div key={type.slot} className={"capitalize border w-min rounded-sm mr-1 px-1 text-white border-black"} style={{ backgroundColor: getColorForType(type.type.name) }}>
                                        {type.type.name}
                                    </div>))}

                            </div>
                            <div>
                                {Object.keys(species).length !== 0 ? species.flavor_text_entries[0].flavor_text.replaceAll("\f", "\n") : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PokeDialog
