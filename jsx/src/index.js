import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = 'Click me!';
    const labelText = 'Enter name';
    return (
        <div>
            <label htmlFor="name" className="nameLabel">{labelText}</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white', border: 'none'}}>{buttonText}</button>
        </div>
    );
};

ReactDOM.render(<App />,  document.querySelector('#root'));