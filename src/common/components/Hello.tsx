import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const query = gql`
  query Hello {
    hello
  }
`

export const Hello = () => <Query query={query}>
  {({ loading, data }) => loading ? <p>loading</p> : <p>hello { data.hello }</p>}
</Query>
