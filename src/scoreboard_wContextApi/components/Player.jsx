import React from 'react';
import { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Consumer } from './Context/data';
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
    //static to define proptypes on the class
    // you call proptype staright from the class without instantiating the class
    //  static propTypes = {
    //     id: PropTypes.number.isRequired,
    //     index: PropTypes.number.isRequired,
    //     score: PropTypes.number.isRequired,
    //     name: PropTypes.string.isRequired,
    //     changeScore: PropTypes.func.isRequired,
    //     removePlayer: PropTypes.func.isRequired,

    // };

    render(){

        const {
            pName,
            id,
            score,
            index,
            removePlayer,
            changeScore,
        } = this.props;

        return (
            <Consumer>
                { context =>{
                    // const {
                    //     pName,
                    //     id,
                    //     score,
                    //     index,
                    // } = context;
                    return(
                        <div className="player flex text-center justify-evenly w-full">
                        <span className="playerName p-4">
                            <button className="x-player p-4 bg-white focus:ring-2 focus:ring-rose-400 mr-7 text-emerald-500 font-bold rounded-lg" 
                            onClick={ () => removePlayer(id) }>x  </button>
                            {pName}
                        </span>
                        <Counter score={score} changeScore={changeScore} index={index}/>
                    </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Player;