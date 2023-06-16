import React, {Component} from "react";

class Timer extends Component{

    state = {
        isRunning: false,
        elapsedTime: 0,
        prevTime: 0,
    };


    componentDidMount(){
        this.intervalID = setInterval(() => {
           this.tick() 
        }, 100);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    tick = ()=>{
        // console.log('ticking. .');
        if (this.state.isRunning){
            const now = Date.now();
            this.setState(prevState=>({
                prevTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.prevTime),
            }));
        }
        // this.setState( prevState => {
        //     return{
        //         elapsedTime: prevState.elapsedTime +=1
        //     }
        // })
    }

    handleTimer = () => {
        this.setState(prevState=>({
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning){
            this.setState({ prevTime: Date.now() });
        }
    }

    handleReset = () => {
        this.setState( {
            elapsedTime: 0,
            // isRunning: false
        });
    }
    // handleTimer = () => {
    //     this.setState( prevState => {
    //         return{
    //             isRunning: !prevState.isRunning
    //         }
    //     });
    // }

    render(){
        // console.log(this.state.value);
        const secs = Math.floor(this.state.elapsedTime / 1000);
        return(
            <div className="justify-center">
                <h2 className="w-full text-center">Stopwatch</h2>
                <h1 className="w-full text-center p-2 font-extrabold text-lg">{ secs }</h1>
                <span className="flex gap-3">
                <button onClick={this.handleTimer} className="bg-white bg-opacity-20 cursor-pointer hover:bg-green-300 focus:ring-1 ring-purple-300 transition-all p-1 px-2 rounded-md">
                    {
                        this.state.isRunning ? 'Stop' : 'Start'
                        // if isRunning is true, display 'Stop', otherwise, 'Start'
                    }
                </button>
                <button onClick={this.handleReset} className="bg-white bg-opacity-20 cursor-pointer hover:bg-green-300 focus:ring-1 ring-purple-300 transition-all p-1 px-2 rounded-md">
                    Reset
                </button>
                </span>
            </div>
        );
    }

}

export default Timer;