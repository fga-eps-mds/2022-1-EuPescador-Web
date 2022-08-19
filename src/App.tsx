import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'

import Fishes from './pages/Fishes'
import Datas from './pages/Datas'
import User from './pages/User/User'
import Home from './pages/Home'
import Logs from './pages/Logs'

import Login from 'pages/Login'
import Register from 'pages/Register'

import './assets/styles/Sidebar.css'
import './assets/styles/Table.css'

import React from 'react'
import UserForm from './pages/User/UserEdit'

function App() {
  const [auth, setAuth] = React.useState<string>(localStorage.getItem('UserData'))

  return (
    <Routes>
      <Route path="/" element={auth ? <Home /> : <Navigate replace to="/login" />} />
      <Route path="/peixes" element={auth ? <Fishes /> : <Navigate replace to="/login" />} />
      <Route path="/dados" element={auth ? <Datas /> : <Navigate replace to="/login" />} />
      <Route path="/usuarios" element={auth ? <User /> : <Navigate replace to="/login" />} />
      <Route path="/logs" element={auth ? <Logs /> : <Navigate replace to="/login" />} />
      <Route path="/login" element={auth ? <Login /> : <Login />} />
      <Route path="/register" element={auth ? <Register /> : <Register />} />
    </Routes>
  )
}

export default App
