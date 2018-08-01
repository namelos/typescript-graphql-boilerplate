import React from 'react'

export const Html = ({ content, client }) => {
  const state = client.extract()
  const stateString = JSON.stringify(state)

  return <html lang="en">
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      <script charSet="UTF-8"
              dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__=${stateString};` }} />
      <script src="main.js" />
    </body>
  </html>
}
