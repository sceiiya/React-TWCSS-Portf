import React, { Component } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayer from './components/AddForm';
class App extends Component {

    //two types of state
    //Application State //resusable for its children components
    //Component State //local component state
    state = {
        players: [
            {
                id: 1,
                name: 'una',
                score: 0,
            },
            {
                id: 2,
                name: 'lawa',
                score: 0,
            },
            {
                id: 3,
                name: 'san',
                score: 0,
            },
            {
                id: 4,
                name: 'pat',
                score: 0,
            },
        ]
    };

    // lastPlayerID = 4;
    lastPlayerID = this.state.players.length;

    // handleScoreChange = (index, delta) => {
    //     if (this.state.players[index].score === 0 && delta === -.5) {
    //         return;
    //     }

    //     this.setState( prevState =>({
    //         score: prevState.players[index].score += delta
    //     }));
    // }

    handleScoreChange = (index, delta) => {
        // console.log(this.state.players[index].score);
        // console.log('index: '+index+' delta: '+delta);

        if (this.state.players[index].score <= 0 && delta <= 0) {
            return;
        }

        this.setState(prevState => {
          const updatedPlayers = [...prevState.players];
          updatedPlayers[index] = {
            ...updatedPlayers[index],
            score: updatedPlayers[index].score + delta
          };
          return { players: updatedPlayers };
        });
      }
      

    // handleScoreChange = (index, delta) => {
    //     this.setState(prevState => {
    //       const updatedPlayers = [...prevState.players];
    //       const player = updatedPlayers[index];
    //       if (player.score !== 0 || delta !== -1) {
    //         player.score += delta;
    //       }
    //       return { players: updatedPlayers };
    //     });
    //   }
      
    handleRemovePlayer = (id) =>{
        this.setState( prevState => {
            return{
                players: prevState.players.filter(p => p.id !== id)
            }
        });
    }
    
    handleAddPlayer = (name) => {
        this.setState( prevState =>{
            return{
                players: [
                    // ...this.state.players,
                    ...prevState.players,
                    {
                    id: this.lastPlayerID +=1,
                    name,
                    score: 0,
                },
                // ...prevState.players,
            ]
            }
        });
    }

    render(){
        return(
          <section className='flex content-center w-full justify-center m-auto text-slate-100'>
            <div className="counter bg-emerald-500 w-4/5 rounded-lg mt-3">
                <Header title='Scoreboard' Players={this.state.players}/>
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
                <AddPlayer addPlayer={this.handleAddPlayer}/>
            </div>
          </section>
        );
    }
}

export default App;