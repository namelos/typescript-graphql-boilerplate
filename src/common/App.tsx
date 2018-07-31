import React from 'react'
import { Hello } from '../queryTypes'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

class HelloQuery extends Query<Hello, {}> {}

const query = gql`
  query Hello {
    hello
  }
`

export const App = () => <HelloQuery query={query}>
  {({ loading, data }) => loading ? <p>loading</p> : <p>hello { data.hello }</p>}
</HelloQuery>
