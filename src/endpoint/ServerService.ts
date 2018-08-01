import { Inject, Service } from 'typedi'
import express, { Express } from 'express'
import { useExpressServer } from 'routing-controllers'
import { ApolloServer } from 'apollo-server-express'
import { IndexController } from './IndexController'
import { SchemaService } from './SchemaService'

@Service()
export class ServerService {
  app: Express

  constructor(private schemaService: SchemaService) {
    this.app = express()
  }

  addControllers() {
    useExpressServer(this.app, {
      controllers: [IndexController]
    })
  }

  addGraphQLEndpoint() {
    new ApolloServer({ schema: this.schemaService.schema }).applyMiddleware({ app: this.app, path: '/api' })
  }

  listen(port) {
    this.addGraphQLEndpoint()
    this.addControllers()
    this.app.listen(port, () => console.log(`🚀 Server ready at http://localhost:4000`))
  }
}
