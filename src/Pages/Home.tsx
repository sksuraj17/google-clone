import React from 'react'
import {ViewGridIcon} from "@heroicons/react/solid";

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-content-center h-screen'>
        <header className='flex w-full p-5 justify-between text-sm text-grey-700'>
            <div className="flex space-x-4 items-center">
                <p className='link'>About</p>
                <p className="link">Store</p>
            </div>

            <div className="flex space-x-4 items-center">
                <p className='link'>Gmail</p>
                <p className="link">Images</p>
                <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" /> 
                </div>
        </header>
    </div>
  )
}

export default Home