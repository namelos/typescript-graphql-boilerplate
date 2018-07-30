import { ApolloServer, gql, IResolvers } from 'apollo-server'
import typeDefs from './typeDefs.graphqls'

const resolvers = {
  Query: {
    hello: () => 'world'
  }
}

;(async () => {
  const { url } = await new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers
  }).listen()

  console.log(`🚀 Server ready at ${url}`)
})()
