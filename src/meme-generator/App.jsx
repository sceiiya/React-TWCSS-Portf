import React, { Component, useState, useEffect } from 'react';
import './App.css';
import sample from '../../src/digital-business-card/assets/images/profile.jpg'
import Image from './components/Image';
import Inputs from './components/Inputs';
// import memesData from './context/memesData';
    //two types of state
    //Application State //resusable for its children components
    //Component State //local component state

const App = () => {
    const memeData = {
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg' 
    };

    // let memesRawArr = [];
    // const [memesRawArr, setMemesRawArr] = useState([]);
    const [memesArr, setMemesArr] = useState([]);


    // using fetch in a use effect
    // useEffect( () => {
    //     fetch('https://api.imgflip.com/get_memes')
    //     .then(data => data.json())
    //     .then(data => setMemesArr(data.data.memes))
    // }, []);

    //using async func in a fetch use effect
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setMemesArr(data.data.memes)
            
        }
        getMemes()
        
        // note: useeffect return expect a function as a return for clean up function
        return () => {
            //some code for clean up function
        }
    }, []);
    
    //check the game project how to import contexts as state
    // import { MemeData, setMemeData } from './context/memeState';
    const [MemeData, setMemeData] = useState(memeData);
    const {topText, bottomText, randomImage} = MemeData;
    // console.log(MemeData)

    const rn = () => {
        return Math.floor(Math.random()*memesArr.length);
    }

    const newMemeImg = () => {

        const {url} = memesArr[rn()];
        // return memesArr[rn()].url;
        return url;
    }

    const handleNewMemeImage = () => {
        setMemeData( prevMemeData => ({
            ...prevMemeData,
            'randomImage' : newMemeImg()
        })  )
        // console.log(newMemeImg());
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMemeData( prevMemeData => ({
            ...prevMemeData,
            [name] : value
        })  )
        // console.log(newMemeImg());
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
        
        <main className='p-6 px-48 max-md:px-24 max-sm:px-8'>
            <Inputs
                handleChange={handleChange}
                handleNewMemeImage={handleNewMemeImage}
            />
            <Image 
                randomImage={randomImage}
                topText={topText} 
                bottomText={bottomText}
            />
            {/* IMAGE */}
        </main>
        </>
        )
}

export default App;