import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './pages/Main'
// import Competitions from './pages/Competitions'
// import Team from './pages/Team'
// import Camp from './pages/Camp'
// import Beginners from './pages/Beginners'
// import Awards from './pages/Awards'
// import Price from './pages/Price'
// import Blog from './pages/Blog'
import Article from './pages/Article'
// import Shop from './pages/Shop/Shop'

import '@assets/scss/App.scss'

// const Main = React.lazy(() => import('./pages/Main'))
const Competitions = React.lazy(() => import('./pages/Competitions'))
const Team = React.lazy(() => import('./pages/Team'))
const Camp = React.lazy(() => import('./pages/Camp'))
const Beginners = React.lazy(() => import('./pages/Beginners'))
const Awards = React.lazy(() => import('./pages/Awards'))
const Price = React.lazy(() => import('./pages/Price'))
const Blog = React.lazy(() => import('./pages/Blog'))
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
        <Route path="/awards" exact component={Awards} />
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
