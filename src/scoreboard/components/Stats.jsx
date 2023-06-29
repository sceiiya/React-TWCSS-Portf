import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {
    
    // const Players = props.Players.length;
    // let tScores = 0;
    // props.Players.map(player =>{
    //     return tScores += player.score;
    // })

    const totalS = props.Players.reduce((total, player) => {
        return total + player.score;
    }, 0);

    // console.log(totalS);

    return (
        <>
        <table>
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{props.Players.length}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalS}</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}

Stats.propTypes = {
    Players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    })),
};

export default Stats;