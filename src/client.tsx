import React from 'react'
import { render } from 'react-dom'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'

const client = new ApolloClient({ uri: '/api'  })

const query = gql`
  {
    hello
  }
`

const App = () => <Query query={query}>
  {({ loading, data }) => loading ? <p>loading</p> : <p>hello { data.hello }</p>}
</Query>

render(<ApolloProvider client={client}>
  <App />
</ApolloProvider>, document.body)
