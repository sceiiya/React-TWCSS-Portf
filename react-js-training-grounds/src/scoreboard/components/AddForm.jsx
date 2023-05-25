import React, {Component} from "react";

//2 ways to edit input.. { controlled component, creationg refs }\

// controlled component requires state and requires function to manipulate state
// controlled component with state call render() on every keystroke(onChange)

// refs can be uised if you only need few inputs
// refs can be used if you dont need to keep track of every keystroke(onChange)
// refs call render() only once
// refs can be also used in function components
class AddPlayer extends Component{

    // added create ref |refacrtored|
    // state = {
    //     value: ''
    // };

    inputPlayer = React.createRef();

    // handleValueChange = (e) => {
    //     this.setState({ value: e.target.value });
    // }

    // added create ref |refacrtored|
    handleAddSubmit = (e) => {
        e.preventDefault();
        // this.props.addPlayer(this.state.value);
        this.props.addPlayer(this.inputPlayer.current.value);
        // this.setState({ value: ''});
        // added create ref |refacrtored|
        e.currentTarget.reset();
    }

    render(){        
        // console.log(this.state.value);
            console.log(this.inputPlayer);
        return(
            <form className="p-4 flex justify-between" onSubmit={this.handleAddSubmit}>
                <input className="from-slate-700 text-fuchsia-700 p-2 rounded-md"
                type="text" 
                ref={this.inputPlayer}
                placeholder="enter name" 
                // added create ref |refacrtored|
                // value={this.state.value}
                // onChange={this.handleValueChange}
                />
                <input className="cursor-pointer hover:bg-green-300 focus:ring-2 ring-cyan-400 transition-all p-4 rounded-md" type="submit" value="AddPlayer" />
            </form>
        );
    }

}

export default AddPlayer;