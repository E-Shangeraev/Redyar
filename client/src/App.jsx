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
import Article from './pages/Article'

import '@assets/scss/App.scss'

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/competitions" exact component={Competitions} />
      <Route path="/team" exact component={Team} />
      <Route path="/camp" exact component={Camp} />
      <Route path="/beginners" exact component={Beginners} />
      <Route path="/awards" exact component={Awards} />
      <Route path="/price" exact component={Price} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/:id" exact component={Article} />
    </Switch>
  </div>
)

export default App
