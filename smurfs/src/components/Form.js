import React, { useState } from "react";
import { postingSmurf } from "../actions"
import { connect } from "react-redux";
import axios from 'axios';


function Form(props) {
    const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

    const handleChange = event => {
        setSmurf({ ...smurf, [event.target.name]: event.target.value })
    };

    const smurfAxios = (data) => {
        return axios
            .post('http://localhost:3333/smurfs', data)
    }

    const submitForm = event => {
        event.preventDefault();
        console.log("new smurf", smurf)
        smurfAxios(smurf)
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" name="name" value={smurf.name} onChange={handleChange} placeholder="Name" />
                <input type="text" name="age" placeholder="Age" value={smurf.age} onChange={handleChange} />
                <input type="text" name="height" placeholder="Height" value={smurf.height} onChange={handleChange} />
                <button type="submit">Submit</button>
                <p>after submit, load the list again</p>
            </form>
        </div>
    )
}

export default connect(state => {
    return state;
})(Form);