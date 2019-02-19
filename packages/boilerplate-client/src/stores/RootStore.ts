import { observable } from 'mobx'
import ViewStore from '@client/stores/ViewStore'
import NotificationStore from '@appkit-client/stores/NotificationStore'
import UserStore from './UserStore'
import InputStore from '@appkit-client/stores/InputStore'

export default class RootStore {
  static rootStore: RootStore
  @observable serverVersion: string = 'not updated'
  @observable clientVersion: string = 'not updated'
  viewStore: ViewStore
  notificationStore: NotificationStore
  inputStore: InputStore
  userStore: UserStore

  constructor() {
    RootStore.rootStore = this
    this.viewStore = new ViewStore(this)
    this.notificationStore = new NotificationStore(this)
    this.inputStore = new InputStore(this)
    this.userStore = new UserStore(this)
    // init all stores
    // this.initAllStores(callbackOnInit)
  }

  initAllStores = async () => {
    console.log(`init all stores`)
    // yield this.setVersionInfo(() => {})
  }
}
