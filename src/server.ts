import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import typeDefs from './typeDefs.graphqls'

const app = express()

const resolvers = {
  Query: {
    hello: () => 'world'
  }
}

new ApolloServer({ typeDefs: gql(typeDefs), resolvers })
  .applyMiddleware({ app, path: '/' })

app.listen(4000, () => console.log(`🚀 Server ready at http://localhost:4000`))
