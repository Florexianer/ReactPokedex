import React, { useState } from 'react'
import PokeList from '../components/PokeList';
import Searchbar from '../components/Searchbar';

function HomePage() {

    const [filterString, setFilterString] = useState("");

    return (
        <>
            <Searchbar filterString={filterString} setFilterString={setFilterString} />
            <PokeList filterString={filterString} />
        </>
    )
}

export default HomePage
