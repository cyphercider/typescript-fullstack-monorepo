import { observable, action, computed, autorun } from 'mobx'
import RootStore from '@client/stores/RootStore'
import { Router } from 'director/build/director'

export enum AppPage {
  Home = 'Home',
  HooksDemo = 'HooksDemo',
  ComponentsDemos = 'ComponentsDemos',
  ServerApiDemo = 'ServerApiDemo'
}

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
    }
  }

  @computed
  get currentRoute() {
    switch (this.currentPage) {
      case AppPage.Home:
        return '/home'
      case AppPage.HooksDemo:
        return '/hooks'
      case AppPage.ServerApiDemo:
        return '/serverApi'
      case AppPage.ComponentsDemos:
        return '/components'
      default:
        throw new Error(`page not recognized ${this.currentPage}`)
    }
  }

  startRouter = () => {
    const router = new Router({
      '/': () => this.setPage(AppPage.Home),
      '/home': () => this.setPage(AppPage.Home),
      '/hooks': () => this.setPage(AppPage.HooksDemo),
      '/serverApi': () => this.setPage(AppPage.ServerApiDemo),
      '/components': () => this.setPage(AppPage.ComponentsDemos)
    })
    router.configure({
      notfound: () => this.setPage(AppPage.Home),
      html5history: true
    })
    router.init()
    autorun(() => {
      if (this.currentRoute !== window.location.pathname)
        window.history.pushState(null, '', this.currentRoute)
    })
  }
}
