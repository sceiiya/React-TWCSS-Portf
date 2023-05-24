import React from 'react';
import { PureComponent } from 'react';
import Counter from './Counter';
// class Player extends PureComponent {
//     render(){
//         console.log('name: '+pName+'  => render once');
//         return (
//             <div className="player flex text-center justify-evenly w-full">
//                 <span className="playerName p-4">
//                     <button className="x-player p-4 bg-white focus:ring-2 focus:ring-rose-400 mr-7 text-emerald-500 font-bold rounded-lg" 
//                     onClick={ () => removePlayer(id) }>x  </button>
//                     {pName}
//                 </span>
//                 <Counter score={score} changeScore={changeScore} index={index}/>
//             </div>
//         );
//     }
// }

//Player 2.0
class Player extends PureComponent {
    render(){
        const {
            pName,
            id,
            score,
            index,
            removePlayer,
            changeScore,
        } = this.props;
        console.log('name: '+pName+'  => render once');
        return (
            <div className="player flex text-center justify-evenly w-full">
                <span className="playerName p-4">
                    <button className="x-player p-4 bg-white focus:ring-2 focus:ring-rose-400 mr-7 text-emerald-500 font-bold rounded-lg" 
                    onClick={ () => removePlayer(id) }>x  </button>
                    {pName}
                </span>
                <Counter score={score} changeScore={changeScore} index={index}/>
            </div>
        );
    }
}

export default Player;