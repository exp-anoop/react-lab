import React from 'react';

// Counter Component 
class Counter extends React.Component {
    state = {
        count: 0
    }
    
    handlePlusOne = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    handleMinusOne = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    handleReset = () => {
        this.setState(() => ({ count: 0 }));
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <p>Actions below</p>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
                <hr />
            </div>
        );
    }
}


export default Counter;