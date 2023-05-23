import React, { Component } from 'react';
import Header from './components/Header';
import Player from './components/Player';
class App extends Component {

    //two types of state
    //Application State //resusable for its children components
    //Component State //local component state
    state = {
        players: [
            {
                id: '1',
                name: 'una',
                score: 0,
            },
            {
                id: '2',
                name: 'lawa',
                score: 2,
            },
            {
                id: 3,
                name: 'san',
                score: 0,
            },
            {
                id: 4,
                name: 'pat',
                score: 4,
            },
        ]
    };

    // handleScoreChange = (index, delta) => {
    //     // console.log(this.state.players[index]);
    //     if(this.state.players[index].score == 0){
    //         //do
    //     }else{
    //          //much much better factored syntax
    //         this.setState( prevState =>({
    //             score: prevState.players[index].score += delta
    //         }));
    //     }
    //     console.log('index: '+index+' delta: '+delta);
    // }


    handleScoreChange = (index, delta) => {
        this.setState(prevState => {
          const updatedPlayers = [...prevState.players];
          const player = updatedPlayers[index];
          if (player.score !== 0 || delta !== -1) {
            player.score += delta;
          }
          return { players: updatedPlayers };
        });
      }
      
    handleRemovePlayer = (id) =>{
        this.setState( prevState => {
            return{
                players: prevState.players.filter(p => p.id !== id)
            }
        });
    }
    
    render(){
        return(
          <section className='flex content-center w-full justify-center m-auto text-slate-100'>
            <div className="counter bg-emerald-500 w-4/5 rounded-lg mt-3">
                <Header title='Scoreboard' tPlayers={this.state.players.length}/>
                {/* players list */}
                {
                    this.state.players.map( (player, index) =>
                    <Player 
                    id={player.id}
                    pName={player.name}
                    score={player.score}
                    key={player.id.toString()}
                    index={index}
                    changeScore={this.handleScoreChange}
                    removePlayer={this.handleRemovePlayer}
                    /> 
                    )
                }
            </div>
          </section>
        );
    }
}

export default App;