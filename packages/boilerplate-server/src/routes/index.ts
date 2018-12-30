import { Express } from 'express'
import { makeRoutes as makeTestRoutes } from './test'
import { makeRoutes as makeAuthRoutes } from './auth'

/**
 * How can we build a route creator helper function?
 * One for get and one for post (prefer over just 'use')
 * Would be nice if we could pass an async function into it... so like
 *
 * makeroute(async (R) => T)
 * where R is the type of the body expected by the route, and T is the return type of the route.
 */

export { makeRoutes } from './test'

export function createRoutes(app: Express) {
  // Server.buildServices(app)
  makeTestRoutes(app)
  makeAuthRoutes(app)
}
