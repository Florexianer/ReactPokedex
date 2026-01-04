import React from 'react'
import pokedex from '../assets/pokedex.png';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    let defaultClasses = 'text-white rounded-md px-2 py-1.5 hover:bg-gray-900 mx-1';

    return (
        <nav className="bg-gray-600 border-b border-gray-800">
            <div className="mx-auto max-w-7xl px-5">
                <div className="flex h-15 items-center justify-between">
                    <NavLink to="/" className="flex justify-end items-center">
                        <img src={pokedex} className='h-8' />
                        <div className="text-white font-bold text-xl">
                            Pokedex
                        </div>
                    </NavLink>
                    <div className="flex justify-between items-center">
                        <NavLink to="/"
                            className={({ isActive }) => defaultClasses + (isActive ? ' bg-black' : '')}>
                            Home
                        </NavLink>
                        <NavLink to="/test"
                            className={({ isActive }) => defaultClasses + (isActive ? ' bg-black' : '')}>
                            Test
                        </NavLink>
                        <NavLink to="/about"
                            className={({ isActive }) => defaultClasses + (isActive ? ' bg-black' : '')}>
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
