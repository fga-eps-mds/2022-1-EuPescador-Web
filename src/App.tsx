import GlobalStyle from '~assets/styles/global'
import truck from '~assets/images/truck.gif'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Header from '~components/Header'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <>
              <GlobalStyle />
              <img
                src={truck}
                style={{
                  height: 200,
                  position: 'absolute',
                  top: '40%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/header">
            <Header title="Titulo" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
