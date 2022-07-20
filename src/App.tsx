import GlobalStyle from '~assets/styles/global'
import truck from '~assets/images/truck.gif'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Home from './pages/Home'
import Fishes from './pages/Fishes'
import Datas from './pages/Datas'
import User from './pages/User'

import Login from 'pages/Login'
import Register from 'pages/Register'

import Sidebar from './components/Sidebar'
import './components/layout/Sidebar.css'

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/peixes" element={<Fishes />} />
            <Route path="/dados" element={<Datas />} />
            <Route path="/usuario" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  )
}

export default App