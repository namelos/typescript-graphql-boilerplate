import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  query Hello {
    hello
  }
`

export const App = () => <Query query={query}>
  {({ loading, data }) => loading ? <p>loading</p> : <p>hello { data.hello }</p>}
</Query>
