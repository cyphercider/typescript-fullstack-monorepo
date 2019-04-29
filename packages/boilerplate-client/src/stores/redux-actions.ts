import { reduxStore } from './ReduxStore'
import { Router } from 'director/build/director'

const enum Action {
  CHANGE_ROUTE = 'CHANGE_ROUTE'
}

// type ChangeRoutePayload = string

export function changeRoute(newRoute: string) {
  console.log(`changing route to ${newRoute}`)
  reduxStore.dispatch({ type: Action.CHANGE_ROUTE, route: newRoute })
}

function startRouter() {
  const router = new Router({
    '/': () => changeRoute('/'),
    '/home': () => changeRoute('/home'),
    '/hooks': () => changeRoute('/hooks'),
    '/serverApi': () => changeRoute('/serverApi'),
    '/components': () => changeRoute('/components')
  })
  router.configure({
    notfound: () => changeRoute('/'),
    html5history: true
  })
  router.init()
}

startRouter()
