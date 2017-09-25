import React from 'react';

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

export default Option;