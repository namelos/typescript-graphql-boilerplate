import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import express from 'express'
import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-express'
import schemaString from './schema.graphql'

import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'

import { App } from './common/App'

const app = express()

const resolvers = {
  Query: {
    hello: () => 'world'
  }
}

const schema = makeExecutableSchema({ typeDefs: gql(schemaString), resolvers })

app.get('/', (req, res) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache()
  })

  const Root = <ApolloProvider client={client}>
    <App />
  </ApolloProvider>

  getDataFromTree(Root).then(() => {
    const content = renderToString(Root)

    const html = <html lang="en">
    <body>
    <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
    <script charSet="UTF-8"
            dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__=${JSON.stringify(client.extract())};` }} />
    <script src="main.js" />
    </body>
    </html>

    res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`)
  })
})

new ApolloServer({ schema }).applyMiddleware({ app, path: '/api' })

app.listen(4000, () => console.log(`🚀 Server ready at http://localhost:4000`))
