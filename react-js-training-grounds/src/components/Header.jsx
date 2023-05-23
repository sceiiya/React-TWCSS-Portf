import React from 'react';


const Header = (p) => 
<header id="head" className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-evenly w-full p-4">
    <h1>{p.title}</h1>
    <span className="stats">Players: {p.tPlayers}</span>
</header>
;

export default Header;