// eslint-disable-next-line no-unused-vars
import React from 'react'
import {FaSearch} from  "react-icons/fa"

function SearchBar(props) {
    const {handlerChange, handlerSubmit}= props;

  return (
    <div className='relative w-900 rounded-r-lg'>
        <form onChange={(event)=>handlerChange(event)} className='focus:ouline-none'>
            <input
            className='block p-5 w-full h-12 z-20 text-sm text-gray-900 bg-gray-50 
            rounded-l-lg border-l-gray-50 border-l-2 border border-gray-300 
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-500 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 
            rounded-r-lg border'
            type="search" 
            name="search"
            placeholder='Buscador...'
            />
            <button 
            onClick={(event)=>handlerSubmit(event)} 
            type="submit"
            className='absolute flex justify-center items-center top-0 h-12 right-0 p-2.5 text-sm font-medium text-white bg-black rounded-r-lg border 
            border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ouline-none focus:ring-blue-300 
            dark:bg-blue-600 dark:bg-700 dark:focus:ring-blue-800'
            >
                <FaSearch className='w-3 h-3 mr-1 '/>
                Buscar
            </button>
        </form>
    </div>
  )
}

export default SearchBar