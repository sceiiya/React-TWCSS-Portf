import React, { Component, useState, useEffect } from 'react';
import './App.css';
import sample from '../../src/digital-business-card/assets/images/profile.jpg'
import Image from './components/Image';
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
    }, [])
    
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
            <div className='grid grid-rows-2 gap-4'>
                <span className='flex flex-row justify-evenly gap-3'>
                    <input type="text" placeholder='Top Text'
                    name='topText'
                    maxLength='35'
                    onChange={handleChange}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                    <input type="text" placeholder='Bottom Text'
                    name='bottomText'
                    maxLength='35'
                    onChange={handleChange}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                </span>
                <button onClick={handleNewMemeImage} className='mx-auto w-full bg-emerald-300 font-bold text-lg text-white p-2 rounded-md'>Generate Random Meme Image</button>
                {/* type='submit' */}
            </div>
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