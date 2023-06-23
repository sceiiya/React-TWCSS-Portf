import React, { Component } from 'react';
import './App.css';
import sample from '../../src/digital-business-card/assets/images/profile.jpg'
import memesData from './context/memesData';
    //two types of state
    //Application State //resusable for its children components
    //Component State //local component state

const App = () => {
    function handleTest(){
        alert('test');
    }

    const memesArr = memesData.data.memes;
    
    const rn = () => {
        return Math.floor(Math.random()*memesArr.length);
    }

    const newMemeImg = () => {
        const {url} = memesArr[rn()];
        // return memesArr[rn()].url;
        return url;
    }

    const handleNewMemeImage = () => {
        console.log(newMemeImg());
    }
    
    return(
        <>
        <header className='h-16 bg-emerald-400 flex flex-row'>
            <img src={sample} alt="" className='mx-8 my-1' />
            <span className='w-full justify-between flex flex-row'>
                <p className='text-center my-auto relative text-white font-semibold text-xl'>Generate Meme</p>
                <p className='text-center my-auto relative right-3 text-white font-medium text-lg'>Mini React Project</p>
            </span>
        </header>      
        
        <main className='p-6'>
            <div className='grid grid-rows-2 gap-4'>
                <span className='flex flex-row justify-evenly gap-3'>
                    <input type="text" placeholder='Above Text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                    <input type="text" placeholder='Bottom Text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                </span>
                <button onClick={handleNewMemeImage} className='mx-auto w-full bg-emerald-300 font-bold text-lg text-white p-2 rounded-md'>Generate Random Meme Image</button>
                {/* type='submit' */}
            </div>
            <div className='w-full'>
                <img src={sample} alt="" />
            </div>
        </main>
        </>
        )
}

export default App;