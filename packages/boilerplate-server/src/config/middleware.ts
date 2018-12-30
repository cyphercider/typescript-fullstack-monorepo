import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import { config } from './config'
// import * as jwtExpress from 'express-jwt'

export function mountMiddleware(app: express.Express) {
  app.use('/', express.static(config.publicPath))
  app.use('/docs', express.static(config.userDocsPath))
  app.use(bodyParser.json({ limit: '10mb' }))
  if (config.nodeEnvironment === 'development') {
    // If we're in development, we need to enable cors so our webpack dev server can talk to our node server
    app.use(cors())
  }
}
