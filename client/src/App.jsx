import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './pages/Main'

import '@assets/scss/App.scss'

const Competitions = React.lazy(() => import('./pages/Competitions'))
const Team = React.lazy(() => import('./pages/Team'))
const Camp = React.lazy(() => import('./pages/Camp'))
const Beginners = React.lazy(() => import('./pages/Beginners'))
const Athletes = React.lazy(() => import('./pages/Athletes'))
const Price = React.lazy(() => import('./pages/Price'))
const Blog = React.lazy(() => import('./pages/Blog'))
const Article = React.lazy(() => import('./pages/Article'))
const Shop = React.lazy(() => import('./pages/Shop/Shop'))

const App = () => (
  <div className="App">
    <Suspense fallback={<div />}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/competitions" exact component={Competitions} />
        <Route path="/team" exact component={Team} />
        <Route path="/camp" exact component={Camp} />
        <Route path="/beginners" exact component={Beginners} />
        <Route path="/athletes" exact component={Athletes} />
        <Route path="/price" exact component={Price} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:id" exact component={Article} />
        <Route path="/merch" exact component={Shop} />
        <Route path="/merch/:id" exact component={Shop} />
      </Switch>
    </Suspense>
  </div>
)

export default App
