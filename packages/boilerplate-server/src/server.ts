import * as express from 'express'
import * as http from 'http'
import * as timeUtils from '@appkit-server/util/time'
import { mountMiddleware } from '@server/config/middleware'
import { createRoutes } from '@server/routes/index'
import { config } from '@server/config/config'

if (config.nodeEnvironment === 'development') {
  require('source-map-support').install()
}

let expressApp: express.Express = express()

mountMiddleware(expressApp)
createRoutes(expressApp)

let server = http.createServer(expressApp)

async function doInitTasks() {
  console.log(`init tasks here`)
}

server.listen(config.port, '0.0.0.0', async function() {
  console.log(`Server started on port  ${config.port}`)
  const MAX_INIT_RETRIES = 50
  const INIT_FAIL_DELAY_MS = 5000
  for (let i = 0; i < MAX_INIT_RETRIES; i++) {
    try {
      await doInitTasks()
      break
    } catch (e) {
      console.log(`Error starting server`)
      await timeUtils.delay(INIT_FAIL_DELAY_MS)
    }
  }
})
