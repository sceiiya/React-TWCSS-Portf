const Image = ({randomImage, topText, bottomText}) => {
    return(
        <div className='w-full relative'>
            <img src={randomImage} alt="meme image" className='content-center w-full max-h-96 object-contain bg-slate-100'/>
            <h2 className="top-0 absolute uppercase text-center m-4 text-white text-4xl font-extrabold drop-shadow-lg shadow-black left-1/2 -translate-x-1/2">
                {topText}
            </h2>
            <h2 className="bottom-0 absolute uppercase text-center m-4 text-white text-4xl font-extrabold drop-shadow-lg shadow-black left-1/2 -translate-x-1/2">
                {bottomText}
            </h2>
        </div>
    )
}

export default Image;