import * as React from 'react'
import { Router } from 'director/build/director'

export enum AppPageEnum {
  Home = 'Home',
  HooksDemo = 'HooksDemo',
  ComponentsDemos = 'ComponentsDemos',
  ServerApiDemo = 'ServerApiDemo'
}

export interface AppPage {
  page: AppPageEnum
  route: string
}

const AppPageContext = React.createContext<AppPage>({
  page: AppPageEnum.Home,
  route: ''
})

function useAppPage() {
  const context = React.useContext(AppPageContext)
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`)
  }
  return context
}

function AppPageProvider(props) {
  const [page, setPage] = React.useState<AppPage>({
    page: AppPageEnum.Home,
    route: ''
  })
  React.useEffect(() => startRouter(setPage), [])
  const route = React.useMemo(() => routeFromPage(page.page), [page])

  return (
    <AppPageContext.Provider value={{ page: page, route: route }} {...props} />
  )
}

function routeFromPage(page: AppPageEnum) {
  switch (page) {
    case AppPageEnum.Home:
      return '/#/home'
    case AppPageEnum.HooksDemo:
      return '/#/hooks'
    case AppPageEnum.ServerApiDemo:
      return '/#/serverApi'
    case AppPageEnum.ComponentsDemos:
      return '/#/components'
    default:
      throw new Error(`page not recognized ${page}`)
  }
}

function startRouter(setPage: React.Dispatch<React.SetStateAction<AppPage>>) {
  const router = new Router({
    '/': () =>
      setPage({
        page: AppPageEnum.Home,
        route: routeFromPage(AppPageEnum.Home)
      }),
    '/home': () =>
      setPage({
        page: AppPageEnum.Home,
        route: routeFromPage(AppPageEnum.Home)
      }),
    '/hooks': () =>
      setPage({
        page: AppPageEnum.HooksDemo,
        route: routeFromPage(AppPageEnum.HooksDemo)
      }),
    '/serverApi': () =>
      setPage({
        page: AppPageEnum.ServerApiDemo,
        route: routeFromPage(AppPageEnum.ServerApiDemo)
      }),
    '/components': () =>
      setPage({
        page: AppPageEnum.ComponentsDemos,
        route: routeFromPage(AppPageEnum.ComponentsDemos)
      })
  })
  router.configure({
    notfound: () =>
      setPage({
        page: AppPageEnum.Home,
        route: routeFromPage(AppPageEnum.Home)
      }),
    html5history: true
  })
  router.init()
}
export { AppPageProvider, useAppPage }
