import React, { Component } from 'react';

const Counter = (props) => {

    let index = props.index;

    return(
        <span className="counter p-4">
            <button className="count-act decrease p-4 bg-white focus:ring-2 focus:ring-rose-400 text-emerald-500 font-bold rounded-lg" onClick={()=>props.changeScore(index, -1)}>-</button>
            <span className="count score p-4">{ props.score }</span>
            <button className="count-act increase p-4 bg-white focus:ring-2 focus:ring-lime-400 text-emerald-500 font-bold rounded-lg" onClick={()=>props.changeScore(index, +1)}>+</button>
        </span>
    );
}


export default Counter;