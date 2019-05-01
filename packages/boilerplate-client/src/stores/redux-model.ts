export const enum AppPage {
  Home = 'Home',
  HooksDemo = 'HooksDemo',
  ComponentsDemos = 'ComponentsDemos',
  ServerApiDemo = 'ServerApiDemo'
}

export interface IState {
  appPage: AppPage
}

export type Action = {
  type: 'CHANGE_APP_PAGE'
  page: AppPage
}
