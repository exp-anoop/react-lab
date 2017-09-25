import React from 'react';

import Option from './Option';


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

export default Options;