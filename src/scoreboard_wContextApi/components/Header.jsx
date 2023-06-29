import React from 'react';
import Stats from './Stats';
import Timer from './Timer';

// const Header = (p) => 
// <header id="head" className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-evenly w-full p-4">
//     <Stats Players={p.Players} />
//     <h1>{p.title}</h1>
//     <Timer />
// </header>
// ;

// // header 2.0
// const Header = (props) => {
//     const {Players, title} = props;
//     return(
//         <header id="head" className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-evenly w-full p-4">
//             <Stats Players={Players} />
//             <h1>{title}</h1>
//             <Timer />
//         </header>
//     );
// }


// header 3.0
const Header = () => {
    return(
        <header id="head" className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-evenly w-full p-4">
            <Stats />
            <h1>Score bored</h1>
            <Timer />
        </header>
    );
}

export default Header;