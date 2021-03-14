import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react'

function App() {

  const [autos, setAutos] = React.useState([])

  /*axios.get('https://3030-orange-jackal-zkgwumcb.ws-us03.gitpod.io/automovel').then(
    res => {
      setAutos(res.data)
      console.log(res.data)
    }
  ).then(e => console.error(e))*/

  React.useEffect(() => {
    async function getAutos() {
      try {
        const { data } = await axios.get('https://3030-orange-jackal-zkgwumcb.ws-us03.gitpod.io/automovel')
        console.log(data)
        setAutos(data)
      }
      catch(e) {
        console.error(e)
      }
    }
    getAutos()
  }, [])

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <div>
        { autos.map(auto => <p key={auto.id}>{auto.modelo}</p>)}
      </div>
    </div>
  );
}

export default App;
