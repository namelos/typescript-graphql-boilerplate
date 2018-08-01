import React from 'react'
import { Route } from 'react-router'
import { Hello } from 'common/components/Hello'
import { About } from 'common/components/About'
import { Link } from 'react-router-dom'

export const App = () => <div>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>

  <Route exact path="/" component={Hello} />
  <Route path="/about" component={About} />
</div>
