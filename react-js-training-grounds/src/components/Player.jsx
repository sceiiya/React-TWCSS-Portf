import React from 'react';
import Counter from './Counter';

const Player = (p) => {
    
    return (
        <div className="player flex text-center justify-evenly w-full">
            <span className="playerName p-4">
                <button className="x-player p-4 bg-white focus:ring-2 focus:ring-rose-400 mr-7 text-emerald-500 font-bold rounded-lg" 
                onClick={ () => p.removePlayer(p.id) }>x  </button>
                {p.pName}
            </span>
            <Counter score={p.score} changeScore={p.changeScore} index={p.index}/>
        </div>
    );
}

export default Player;