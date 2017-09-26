import React from 'react';
import ReactDOM from 'react-dom';

import AddOptions from './components/AddOptions';
import Action from './components/Action';
import Options from './components/Options';
import Counter from './components/Counter';
import Header from './components/Header';

import './styles/styles.scss';

class AppComponent extends React.Component {

    state = {
        options: []
    }

    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }));
    }

    handleRemoveItem = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log('pick - ', this.state.options[randomNum]);
    }

    handleAddOption = (option) => {
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

   
    render() {

        const title = "My Application :)";

        return (
            <div>
                <Header title={title} />
                <Counter />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePick}
                />
                <Options
                    items={this.state.options}
                    handleDeleteAll={this.handleRemoveAll}
                    handleRemoveItem={this.handleRemoveItem}
                />
                <AddOptions handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

ReactDOM.render(<AppComponent />, document.getElementById('app'));