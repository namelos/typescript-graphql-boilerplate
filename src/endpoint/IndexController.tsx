import React from 'react'
import { Controller, Get, Req } from 'routing-controllers'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import ApolloClient from 'apollo-client/ApolloClient'
import { SchemaLink } from 'apollo-link-schema'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { App } from 'common/App'
import { Html } from 'common/components/Html'
import { SchemaService } from './SchemaService'
import { StaticRouter } from 'react-router-dom'
import { Request } from 'express'

@Controller()
export class IndexController {
  constructor(private schemaService: SchemaService) {}

  @Get('*')
  async get(@Req() request: Request) {
    const client = new ApolloClient({
      ssrMode: true,
      link: new SchemaLink({ schema: this.schemaService.schema }),
      cache: new InMemoryCache()
    })

    const context = {}

    const Root = <ApolloProvider client={client}>
      <StaticRouter location={request.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>

    await getDataFromTree(Root)
    const content = renderToString(Root)

    return `<!doctype html>\n${renderToStaticMarkup(<Html content={content} client={client} />)}`
  }
}
