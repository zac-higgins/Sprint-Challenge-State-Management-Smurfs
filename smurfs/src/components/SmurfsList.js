import React from 'react';
import { connect } from "react-redux";
import { getThoseSmurfs } from '../actions';

function SmurfsList(props) {
    console.log("Smurfs List", props.smurfs);
    // props.dispatch(getThoseSmurfs())

    return (
        <div>
            <h1>Smurf Village</h1>
            <button onClick={() => props.dispatch(getThoseSmurfs())}>Alexa, get me Smurfs!</button>
            {props.error && <div>{props.error.message}</div>}
            <ul className="list">
                {props.smurfs.map(smurf => {
                    return (
                        <li key={smurf.id}>
                            {smurf.name}, Age: {smurf.age}, Height: {smurf.height},
                        </li>
                    )
                })}

            </ul>
        </div>
    );
};

export default connect(state => {
    return state;
})(SmurfsList);