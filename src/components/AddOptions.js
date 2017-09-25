import React from 'react';

// Add option component
export default class AddOptions extends React.Component {

    handleAddOption = (e) => {
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