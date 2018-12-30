import RootStore from './RootStore'
import { observable, runInAction } from 'mobx'
import { LoginRequest, User } from '@appkit-common/model/auth'
import { login } from '@bpc/model/serverApi'

export default class UserStore {
  rootStore: RootStore
  @observable loggedIn: boolean = false
  @observable user: User
  @observable loginModalOpen: boolean = false

  logout = async () => {
    console.log(`do logout`)
    runInAction(() => {
      this.loggedIn = false
    })
  }

  login = async (req: LoginRequest) => {
    const res = await login(req)
    console.log(`got res ${JSON.stringify(res)}`)
    runInAction(() => {
      this.user = res.user
      this.loggedIn = true
    })
  }

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }
}
