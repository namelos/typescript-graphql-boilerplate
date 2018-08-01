import React from 'react'
import { Controller, Get } from 'routing-controllers'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import ApolloClient from 'apollo-client/ApolloClient'
import { SchemaLink } from 'apollo-link-schema'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { App } from '../common/App'
import { SchemaService } from './SchemaService'

@Controller()
export class IndexController {
  constructor(private schemaService: SchemaService) {}

  @Get('/')
  get() {
    const client = new ApolloClient({
      ssrMode: true,
      link: new SchemaLink({ schema: this.schemaService.schema }),
      cache: new InMemoryCache()
    })

    const Root = <ApolloProvider client={client}>
      <App />
    </ApolloProvider>

    return getDataFromTree(Root).then(() => {
      const content = renderToString(Root)

      const html = <html lang="en">
      <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      <script charSet="UTF-8"
              dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__=${JSON.stringify(client.extract())};` }} />
      <script src="main.js" />
      </body>
      </html>

      return `<!doctype html>\n${renderToStaticMarkup(html)}`
    })
  }
}
