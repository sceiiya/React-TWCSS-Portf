import React, {Component} from "react";

class AddPlayer extends Component{

    state = {
        value: ''
    };

    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleAddSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({ value: ''})
    }

    render(){        
        // console.log(this.state.value);
        return(
            <form className="p-4 flex justify-between" onSubmit={this.handleAddSubmit}>
                <input className="from-slate-700 text-fuchsia-700 p-2 rounded-md"
                type="text" 
                placeholder="enter name" 
                value={this.state.value}
                onChange={this.handleValueChange}
                />
                <input className="cursor-pointer hover:bg-green-300 focus:ring-2 ring-cyan-400 transition-all p-4 rounded-md" type="submit" value="AddPlayer" />
            </form>
        );
    }

}

export default AddPlayer;