import { Service } from 'typedi'
import { GraphQLSchema } from 'graphql'
import typeDefs from './schema.graphql'
import { gql, makeExecutableSchema } from 'apollo-server-express'

@Service()
export class SchemaService {
  schema: GraphQLSchema

  resolvers = {
    Query: {
      hello: () => 'world'
    }
  }

  constructor() {
    this.createSchema()
  }

  createSchema() {
    this.schema = makeExecutableSchema({
      typeDefs: gql(typeDefs),
      resolvers: this.resolvers
    })
  }
}
