import { action, observable } from 'mobx'

export default class NotificationStore {
  rootStore: any
  @observable infoModalOpen: boolean = false
  @observable infoModalMessage: string = ''
  @observable infoModalTitle: string = ''

  constructor(rootStore: any) {
    this.rootStore = rootStore
  }

  @action
  displayInfoModal = (title: string, message: string) => {
    console.log(`DISPLAYING INFO MODAL`)
    this.infoModalMessage = message
    this.infoModalTitle = title
    this.infoModalOpen = true
  }

  @action
  closeInfoModal = () => {
    this.infoModalOpen = false
  }
}
