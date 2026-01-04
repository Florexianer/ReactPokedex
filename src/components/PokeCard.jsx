import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners';
import PokeDialog from './PokeDialog';

function PokeCard({ pokemon }) {

  const [fullPokemon, setFullPokemon] = useState(pokemon);
  const [displayDialog, setDisplayDialog] = useState(false);

  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const fetchPokemon = async () => {

      const data = await axios.get(fullPokemon.url);
      setFullPokemon({ ...fullPokemon, ...data.data });
    }

    if (hovered && !fullPokemon.abilities) {
      setTimeout(() => hovered ? fetchPokemon() : null, 200);
    }
  }, [hovered])

  const onPokemonDetails = () => {
    setDisplayDialog(true);
  };

  return (
    <>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="mb-4 mx-4">
        <div className="text-center border w-30 rounded-md p-3 hover:bg-gray-200 cursor-pointer capitalize" onClick={onPokemonDetails}>
          <div>
            {fullPokemon.name}
          </div>
        </div>
        {hovered ?
          <div className="border rounded-md absolute ml-4 bg-gray-200 z-20 h-40 w-40 flex items-center justify-center">
            {fullPokemon.sprites ?
              <img className="h-40"
                src={fullPokemon.sprites ? fullPokemon.sprites.other["official-artwork"]["front_default"] : null} />

              : <ClipLoader loading="true" />
            }
          </div> : null}

      </div>
      {displayDialog ? <PokeDialog pokemon={fullPokemon} closeDialog={() => setDisplayDialog(false)} /> : null}
    </>
  )
}

export default PokeCard
