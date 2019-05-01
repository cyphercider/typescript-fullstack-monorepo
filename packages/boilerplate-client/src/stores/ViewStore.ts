import { observable, action, computed, autorun } from 'mobx'
import RootStore from '@client/stores/RootStore'
import { Router } from 'director/build/director'
import { changeAppPage } from '@client/stores/redux-actions'
import { AppPage } from './redux-model'

export default class ViewStore {
  rootStore: RootStore
  @observable serverVersion: string = 'not updated'
  @observable clientVersion: string = 'not updated'
  @observable currentPage: AppPage = AppPage.Home

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.startRouter()
  }

  @action.bound
  setPage(page: AppPage) {
    if (page !== this.currentPage) {
      this.currentPage = page
      changeAppPage(page)
    }
  }

  @computed
  get currentRoute() {
    switch (this.currentPage) {
      case AppPage.Home:
        return '/#/home'
      case AppPage.HooksDemo:
        return '/#/hooks'
      case AppPage.ServerApiDemo:
        return '/#/serverApi'
      case AppPage.ComponentsDemos:
        return '/#/components'
      default:
        throw new Error(`page not recognized ${this.currentPage}`)
    }
  }

  startRouter = () => {
    const router = new Router({
      '/': () => {
        this.setPage(AppPage.Home)
        console.log(`in ViewStore: going home`)
      },
      '/home': () => {
        this.setPage(AppPage.Home)
        console.log(`in ViewStore: going home`)
      },
      '/hooks': () => {
        this.setPage(AppPage.HooksDemo)
        console.log(`in ViewStore: going to hooks demo`)
      },
      '/serverApi': () => this.setPage(AppPage.ServerApiDemo),
      '/components': () => this.setPage(AppPage.ComponentsDemos)
    })
    router.configure({
      notfound: () => this.setPage(AppPage.Home),
      html5history: true
    })
    router.init()
    autorun(() => {
      const path = this.currentRoute
      if (path !== window.location.pathname) {
        window.history.pushState(null, '', path)
      }
    })
  }
}
