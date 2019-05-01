export const enum AppPage {
  Home = 'Home',
  HooksDemo = 'HooksDemo',
  ComponentsDemos = 'ComponentsDemos',
  ServerApiDemo = 'ServerApiDemo'
}

export interface IState {
  infoModalOpen: boolean
  infoModalMessage: string
  infoModalTitle: string
}

export type Action = {
  type: 'CHANGE_APP_PAGE'
  page: AppPage
}
