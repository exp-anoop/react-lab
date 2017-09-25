class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);

        this.state = {
            options: props.options
        }
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

    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }

    handleRemoveItem(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log('pick - ', this.state.options[randomNum]);
    }

    handleAddOption(option) {
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    render() {

        const title = "My Application";

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

AppComponent.defaultProps = {
    options: []
  };

/* class Header extends React.Component {
    render() {
        return <h1>{this.props.title}</h1>;
    }
} */

// Stateless functional components
const Header = (props) => {
    return <h1>{props.title}</h1>;
}

Header.defaultProps = {
    title: "Anoop's App"
}


// Action Component

const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePickOption}>
                What should do?
            </button>
        </div>
    );
}


// Options Component
const Options = (props) => {
    return (
        <div >
            <p>Options List ({props.items.length}) - <button onClick={props.handleDeleteAll}>Remove All</button></p>
            {
                props.items.map((item) => (
                    <Option item={item} key={item} handleRemoveItem={props.handleRemoveItem} />
                ))
            }
        </div>
    );
}

// Option Component
class Option extends React.Component {
    render() {
        return (
            <p> -- {this.props.item} - <button onClick={(e) => {
                this.props.handleRemoveItem(this.props.item);
            }}>Remove</button></p>
        );
    }
}


// Add option component
class AddOptions extends React.Component {

    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(e) {
        e.preventDefault();
        const itemEl = e.target.elements.option;

        if (itemEl.value.trim()) {
            this.props.handleAddOption(itemEl.value.trim());
            itemEl.value = '';
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="input" name="option" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

// Counter Component 
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        }
    }

    handlePlusOne() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    handleMinusOne() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    handleReset() {
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

ReactDOM.render(<AppComponent />, document.getElementById('app'));