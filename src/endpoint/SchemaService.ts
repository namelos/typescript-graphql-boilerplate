import { Service } from 'typedi'
import { GraphQLSchema } from 'graphql'
import typeDefs from './schema.graphql'
import { gql, makeExecutableSchema } from 'apollo-server-express'

@Service()
export class SchemaService {
  schema: GraphQLSchema

  constructor() {
    this.createSchema()
  }

  createSchema() {
    const resolvers = {
      Query: {
        hello: () => 'world'
      }
    }

    this.schema = makeExecutableSchema({
      typeDefs: gql(typeDefs),
      resolvers
    })

    return this.schema
  }
}
