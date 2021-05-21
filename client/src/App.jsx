import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './pages/Main'
import Competitions from './pages/Competitions'

import './assets/scss/App.scss'

const App = () => (
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
)

export default App
