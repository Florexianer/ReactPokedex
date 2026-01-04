import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div className="flex justify-center items-center">
            <section className='flex flex-col items-center mt-10' >
                <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
                <div className='text-4xl font-bold'>
                    Page Could Not Be Found
                </div>
                <Link to="/" className='mt-3 border rounded-sm p-1 hover:bg-gray-200'>
                    Go Home
                </Link>
            </section >
        </div>

    )
}

export default NotFoundPage
