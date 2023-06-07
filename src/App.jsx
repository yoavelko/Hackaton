import { useState, useContext } from 'react'
import './App.css'
import Login from './components/Login/Login'
import { LoggedContext } from './context/LoggedContext'
import { IndexContext } from './context/IndexContext'
import { Routes, Route, Outlet, Link } from 'react-router-dom'


function App() {

  const [logged, setLogged] = useState('');
  const [userIndex, setUserIndex] = useState('');

  return (

    <LoggedContext.Provider value={{ logged, setLogged }}>
      <IndexContext.Provider value= {{ userIndex, setUserIndex }}>
        <div id='app-container'><Login /></div>
      </IndexContext.Provider>
    </LoggedContext.Provider>
  )
}

export default App
