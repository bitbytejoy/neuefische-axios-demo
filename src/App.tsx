import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function axiosDemo () {
  axios.get("http://google.com")
    .then(response => response.data)
    .catch(e => console.error(e));

  const data = {
    a: "A",
    b: "b"
  };

  axios.post("http://xyz", data)
    .then(response => response.data)
    .catch(e => console.error(e));

  axios.put("http://xyz", data)
    .then(response => response.data)
    .catch(e => console.error(e));

  axios.delete("http://xyz")
    .then(response => response.data)
    .catch(e => console.error(e))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
