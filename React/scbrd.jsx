// import 'index.css';

let aPlayers = [
    {
        id: '1',
        name: 'una',
        score: 12
    },
    {
        id: '2',
        name: 'lawa',
        score: 16
    },
    {
        id: 3,
        name: 'san',
        score: 97
    },
    {
        id: 4,
        name: 'pat',
        score: 23
    },
];

const Header = (p) => 
<header id="head" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1>{p.title}</h1>
    <span className="stats">Players: {p.tPlayers}</span>
</header>
;

const Player = (p) => {
    return (
        <div className="player">
            <span className="playerName">
                {p.pName}
            </span>
            <Counter score={p.pScore}/>
        </div>
    );
}

const Counter = (p) =>{
    return(
        <div className="counter">
            <button className="count-act decrease">-</button>
            <span className="count score">{ p.score }</span>
            <button className="count-act increase">+</button>
        </div>
    );
}

const App = (p) =>{
    return(
        <div className="counter">
            <Header title='Scoreboard' tPlayers={p.allPlayers.length}/>
            {/* players list */}
            {
                p.allPlayers.map( player =>
                <Player 
                pName={player.name}
                pScore={player.score}
                key={player.id.toString()}
                /> 
                 )
            }
        </div>
    );
}

ReactDOM.render(
    <App allPlayers={aPlayers}/>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Player />,
//     document.getElementById('root')
// );