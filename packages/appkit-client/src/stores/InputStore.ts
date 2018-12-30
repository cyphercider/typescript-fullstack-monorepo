import { runInAction, observable } from 'mobx'

export default class InputStore {
  rootStore: any
  @observable inputTitle: string = ''
  singleTextValueReturnCallback: (strVal: string) => void
  @observable singleTextInputOpen: boolean = false
  @observable singleTextInputValue: string = ''

  constructor(rootStore: any) {
    this.rootStore = rootStore
  }

  openSingleTextInputModal = (
    title: string,
    callbackWithFinalValue: (val: string) => void
  ) => {
    runInAction(() => {
      this.inputTitle = title
      this.singleTextValueReturnCallback = callbackWithFinalValue
      this.singleTextInputOpen = true
    })
  }

  closeSingleTextInputModal = () => {
    runInAction(() => {
      this.singleTextInputOpen = false
    })
  }
}
