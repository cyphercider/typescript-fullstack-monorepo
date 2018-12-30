import { Express } from 'express'

export function makeRoutes(app: Express) {
  app.get('/test/hello', async (req, res) => {
    console.log(`got request...sending response`)
    res.json({ msg: 'hello' })
  })
}
