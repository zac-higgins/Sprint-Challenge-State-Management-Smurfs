import React from "react";
import "./App.css";
import SmurfsList from './SmurfsList'
import Form from './Form';

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <Form />
      <SmurfsList />
    </div>
  )
}

export default App;
