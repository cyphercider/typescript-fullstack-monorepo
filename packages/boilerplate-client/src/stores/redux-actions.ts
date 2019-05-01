import { reduxStore } from './redux-store'
import { AppPage } from './redux-model'

export function changeAppPage(appPage: AppPage) {
  console.log(`changing appPage to ${appPage}`)
  reduxStore.dispatch({ type: 'CHANGE_APP_PAGE', page: appPage })
}
