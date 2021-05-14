import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/Main'
import Competitions from './pages/Competitions'

// import 'normalize.css'
import './assets/scss/App.scss'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/competitions" exact>
          <Competitions />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
