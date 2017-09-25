//*******************Forms And Inputs ********************* *//

let app = {
    title: "To Do App",
    options: []
}

const onAdd = (e) => {
    e.preventDefault();

    let optionsEl = e.target.elements.option;

    if(optionsEl.value) {
        app.options.push(optionsEl.value);
        optionsEl.value = '';
        render();
    }
}


const element = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <h1>To Do App</h1>
            {app.options.length > 0 ? <p><strong>{app.options.length}</strong> items found in the list</p> : <p>No items found</p>}
            <ol>
                {
                    app.options.map((x) => <li key={x}>{x}</li>)
                }
            </ol>
            <form onSubmit={onAdd}>
                <input type="text" name="option" />
                <button type="submit">Add</button>
            </form>
        </div>
    );

    ReactDOM.render(template, element);
}

render();

//********************* BASIC BINDING ***********************//
/* const user = {
    name: "Anoop P R",
    age: 29,
    location: "Trivandrum"
}

const template = (
    <div>
        <h1>{ user.name }</h1>
        <p>Age: { user.age }</p>
        <p>Location: { user.location }</p>
    </div>
); */

//***************** Events and Attributes ********************//

/* let count = 0;
const onPlusOne = () => {
    count++;
    init();
}
const onMinusOne = () => {
    count--;
    init();
}
const onReset = () => { 
    count = 0;
    init();
};



const element = document.getElementById('app');

const init = () => {
    const template = (
        <div>
            <h1>Count: { count }</h1>
            <p>Actions below</p>
            <button onClick={onPlusOne}>+1</button>
            <button onClick={onMinusOne}>-1</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
    ReactDOM.render(template, element);
}

init(); */


