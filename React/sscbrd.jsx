// import 'index.css';

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
                <button className="x-player" onClick={ () => p.removePlayer(p.id) }>x  </button>
                {p.pName}
            </span>
            <Counter />
        </div>
    );
}

class Counter extends React.Component{

    // constructor(){
    //     super()
    //     this.state = {
    //         score: 0
    //     };
    // }

    state = {
        score: 0
    };

    increase(){
        this.setState({
            score: this.state.score +1
        });
    }

    // 2nd sample of defining function
    increase = () => {
        this.setState({
            score: this.state.score +1
        });
    }

    decrease(){
        if(this.state.score == 0){

        }else{
            // this.setState({
            //     score: this.state.score -1
            // });

            //much better syntax
            // this.setState( prevState =>{
            //     return{
            //         score: prevState.score -1
            //     }
            // });

             //much much better factored syntax
            this.setState( prevState =>({
                score: prevState.score -1
            }));
        }
    }

    render(){
        return(
            <div className="counter">
                <button className="count-act decrease" onClick={this.decrease.bind(this)}>-</button>
                <span className="count score">{ this.state.score }</span>
                <button className="count-act increase" onClick={() => this.increase()}>+</button>
                {/* 2nd sample of defining function */}
                <button className="count-act increase" onClick={this.increase}>+</button>

            </div>
        );
    }
}

class App extends React.Component {

    //two types of state
    //Application State //resusable for its children components
    //Component State //local component state
    state = {
        aplayers: [
            {
                id: '1',
                name: 'una',
            },
            {
                id: '2',
                name: 'lawa',
            },
            {
                id: 3,
                name: 'san',
            },
            {
                id: 4,
                name: 'pat',
            },
        ]
    };

    handleRemovePlayer = (id) =>{
        this.setState( prevState => {
            return{
                aplayers: prevState.aplayers.filter(p => p.id !== id)
            }
        });
    }
    
    render(){
        return(
            <div className="counter">
                <Header title='Scoreboard' tPlayers={this.state.aplayers.length}/>
                {/* players list */}
                {
                    this.state.aplayers.map( player =>
                    <Player 
                    id={player.id}
                    pName={player.name}
                    key={player.id.toString()}
                    removePlayer={this.handleRemovePlayer}
                    /> 
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Player />,
//     document.getElementById('root')
// );