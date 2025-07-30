import React from 'react'
import {BrowserRouter, Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
const App = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Router>
    </BrowserRouter>
  )
}

export default App
