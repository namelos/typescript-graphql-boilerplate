import React from 'react'
import { Route } from 'react-router'
import { hot } from 'react-hot-loader'
import { Hello } from 'common/components/Hello'
import { About } from 'common/components/About'
import { Link } from 'react-router-dom'
import Counter from './components/Counter'

export const AppComp = () => <div>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>

  <Counter />
  <Route exact path="/" component={Hello} />
  <Route path="/about" component={About} />
</div>

export const App = hot(module)(AppComp)
