import React from "react";

const Inputs = ({handleChange, handleNewMemeImage}) => {
    return(
        <div className='grid grid-rows-2 gap-4'>
        <span className='flex flex-row justify-evenly gap-3'>
            <input 
                type="text" 
                placeholder='Top Text'
                name='topText'
                maxLength='35'
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            <input 
                type="text" 
                placeholder='Bottom Text'
                name='bottomText'
                maxLength='35'
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
        </span>
        <button onClick={handleNewMemeImage} className='mx-auto w-full bg-emerald-300 font-bold text-lg text-white p-2 rounded-md'>Generate Random Meme Image</button>
        {/* type='submit' */}
        </div>
    )
}

export default Inputs;