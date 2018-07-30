import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: () => 'world'
  }
}

;(async () => {
  const { url } = await new ApolloServer({ typeDefs, resolvers }).listen()
  console.log(`🚀 Server ready at ${url}`)
})()
