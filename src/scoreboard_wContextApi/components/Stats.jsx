import React from 'react';
import { Consumer } from './Context/data';

const Stats = () => {
    return (
        <Consumer>
            { context => {

                const totalS = context.reduce((total, player) => {
                return total + player.score;
                }, 0);

                return(
                    <>
                    <table>
                        <tbody>
                            <tr>
                                <td>Players:</td>
                                <td>{context.length}</td>
                            </tr>
                            <tr>
                                <td>Total Points:</td>
                                <td>{totalS}</td>
                            </tr>
                        </tbody>
                    </table>
                    </>
                );
            } }
        </Consumer>
    );
}
export default Stats;