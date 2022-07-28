import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Fishes from './pages/Fishes'
import Datas from './pages/Datas'
import User from './pages/User'

import Login from 'pages/Login'
import Register from 'pages/Register'
import './components/layout/Sidebar.css'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peixes" element={<Fishes />} />
          <Route path="/dados" element={<Datas />} />
          <Route path="/usuarios" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
