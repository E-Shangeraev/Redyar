import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './pages/Main'
import Competitions from './pages/Competitions'
import Team from './pages/Team'
import Camp from './pages/Camp'
import Beginners from './pages/Beginners'
import Awards from './pages/Awards'
import Price from './pages/Price'
import Blog from './pages/Blog'

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
      <Route path="/beginners" exact>
        <Beginners />
      </Route>
      <Route path="/awards" exact>
        <Awards />
      </Route>
      <Route path="/price" exact>
        <Price />
      </Route>
      <Route path="/blog" exact>
        <Blog />
      </Route>
    </Switch>
  </div>
)

export default App
