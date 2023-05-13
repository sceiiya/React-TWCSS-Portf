// import 'index.css';

const Header = () => 
<header id="head" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1>Scoreboard</h1>
    <span className="stats">Players: 1</span>
</header>
;

const Player = () => {
    return (
        <div className="player">
            <span className="playerName">
                Scei
            </span>
            <Counter />
        </div>
    );
}

const Counter = () =>{
    return(
        <div className="counter">
            <button className="count-act decrease">-</button>
            <span className="count score">69</span>
            <button className="count-act increase">+</button>
        </div>
    );
}

const App = () =>{
    return(
        <div className="counter">
            <Header />

            {/* players list */}
            <Player /> 
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Player />,
//     document.getElementById('root')
// );