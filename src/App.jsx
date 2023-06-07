import { useState, useContext } from 'react'
import './App.css'
import Login from './components/Login/Login'
import { LoggedContext } from './context/LoggedContext'

function App() {

  const [logged, setLogged] = useState('');

  return (

    <LoggedContext.Provider value={{ logged, setLogged }}>
      <div id='app-container'><Login /></div>
    </LoggedContext.Provider>
  )
}

export default App
