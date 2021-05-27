import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './pages/Main'
import Competitions from './pages/Competitions'
import Team from './pages/Team'
import Camp from './pages/Camp'

import '@assets/scss/App.scss'

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/competitions" exact>
        <Competitions />
      </Route>
      <Route path="/team" exact>
        <Team />
      </Route>
      <Route path="/camp" exact>
        <Camp />
      </Route>
    </Switch>
  </div>
)

export default App
