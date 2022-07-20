
import GlobalStyle from '~assets/styles/global'
import truck from '~assets/images/truck.gif'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Home from './pages/Home'
import Login from 'pages/Login'
import Register from 'pages/Register'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App