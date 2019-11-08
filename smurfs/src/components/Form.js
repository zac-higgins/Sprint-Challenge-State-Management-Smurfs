import React, { useState } from 'react';
import { connect } from "react-redux";
import { postingSmurf } from '../actions';

function Form(props) {
    const [smurf, setSmurf] = useState({});

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                setSmurf({
                    name: e.target.name,
                    age: e.target.age,
                    height: e.target.height,
                });
                console.log("smurfs after submit", smurf)
                props.dispatch(postingSmurf(smurf));
            }}>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="age" placeholder="Age" />
                <input type="text" name="height" placeholder="Height" />
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default connect(state => {
    return state;
})(Form);