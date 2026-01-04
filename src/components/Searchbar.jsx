import React from 'react'

function Searchbar({ filterString, setFilterString }) {

    return (
        <>
            <input type="text" value={filterString} onChange={e => setFilterString(e.target.value)}
                placeholder="Search..." className='border rounded-lg mt-10 ml-20 pl-2' />
        </>
    )
}

export default Searchbar
