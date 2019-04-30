import { reduxStore } from './ReduxStore'
import { AppPage } from './model'

export function changeAppPage(appPage: AppPage) {
  console.log(`changing apppage to ${appPage}`)
  reduxStore.dispatch({ type: 'CHANGE_APP_PAGE', page: appPage })
}
