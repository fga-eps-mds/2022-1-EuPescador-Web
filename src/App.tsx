import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Fishes from './pages/Fishes'
import Datas from './pages/Datas'
import User from './pages/User'

import Login from 'pages/Login'
import Register from 'pages/Register'
import './components/layout/Sidebar.css'
import React from 'react'

function App() {
  const [auth, setAuth] = React.useState<boolean>(null)
  React.useEffect(() => {
    function fetchMyAPI() {
      const response = localStorage.getItem('UserData')
      response !== null ? setAuth(true) : setAuth(false)
    }
    fetchMyAPI()
  }, [])

  React.useEffect(() => {
    console.log(auth)
  }, [auth])
  return (
    <>
      <Router>
        {auth ? (
          <Routes>
            <Route path="/" element={<Datas />} />
            <Route path="/peixes" element={<Fishes />} />
            <Route path="/dados" element={<Datas />} />
            <Route path="/usuarios" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/peixes" element={<Navigate replace to="/login" />} />
            <Route path="/dados" element={<Navigate replace to="/login" />} />
            <Route path="/usuarios" element={<Navigate replace to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </Router>
    </>
  )
}

export default App
