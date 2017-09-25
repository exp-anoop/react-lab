import React from 'react';

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

export default Action;