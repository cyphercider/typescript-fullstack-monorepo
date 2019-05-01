import * as React from 'react'
import { runInAction } from 'mobx'
import {
  Home,
  HooksDemo,
  ComponentsDemo,
  ServerApiDemo
} from '@client/pages/index'
import { AppContainer } from '@appkit-client/index'
import { AppkitMenuItem } from '@appkit-client/index'
import { AppPage, IState } from '@client/stores/redux-model'
import {} from '@client/stores/redux-reducer'
import { Paper } from '@material-ui/core'
import { config } from '../config/config'
import { ConditionalModals } from './app/ConditionalModals'
import jss from 'jss'
import jssPreset from 'jss-preset-default'
import { observer } from 'mobx-react-lite'
import { MobxStoreContext } from '@client/index'
// import { useRedux } from '@client/hooks/useRedux'
import { useMappedState, useDispatch } from 'redux-react-hook'

const styles = {
  '@global': {
    h1: config.markdownTheme.h1,
    h2: config.markdownTheme.h2,
    h3: config.markdownTheme.h3,
    p: config.markdownTheme.p,
    li: config.markdownTheme.li
  }
}

jss.setup(jssPreset())
jss.createStyleSheet(styles as any).attach()

export const App = observer(() => {
  const mapState = React.useCallback(
    (state: IState) => ({
      appPage: state.appPage
    }),
    []
  )

  const state = useMappedState(mapState)
  const dispatch = useDispatch()

  // const [state, dispatch] = useRedux((state: IState) => ({
  //   appPage: state.appPage
  // }))

  const currentPage: JSX.Element = React.useMemo(() => {
    switch (state.appPage) {
      case AppPage.Home:
        return <Home />
      case AppPage.ComponentsDemos:
        return <ComponentsDemo />
      case AppPage.ServerApiDemo:
        return <ServerApiDemo />
      case AppPage.HooksDemo:
        return <HooksDemo />
      default:
        throw new Error(`Unknown page ${state.appPage}`)
    }
  }, [state.appPage])

  const menuItems: AppkitMenuItem[] = React.useMemo(() => {
    return [
      {
        name: 'Home',
        onClick: () => {
          dispatch({ type: 'CHANGE_APP_PAGE', page: AppPage.Home })
        }
      },
      {
        name: 'Components Demo',
        onClick: () => {
          dispatch({ type: 'CHANGE_APP_PAGE', page: AppPage.ComponentsDemos })
        }
      },
      {
        name: 'Server API Demo',
        onClick: () => {
          dispatch({ type: 'CHANGE_APP_PAGE', page: AppPage.ServerApiDemo })
        }
      },
      {
        name: 'Hooks Demo',
        onClick: () => {
          dispatch({ type: 'CHANGE_APP_PAGE', page: AppPage.HooksDemo })
        }
      }
    ]
  }, [state.appPage])

  const store = React.useContext(MobxStoreContext)

  return (
    <AppContainer
      menuItems={menuItems}
      config={config}
      loggedIn={store.userStore.loggedIn}
      loginAction={() => {
        runInAction(() => {
          store.userStore.loginModalOpen = true
        })
      }}
      logoutAction={() => {
        store.userStore.logout()
      }}
    >
      <ConditionalModals />
      <Paper
        id="app-paper"
        style={{
          flexGrow: 1,
          margin: 'auto',
          marginBottom: '25px',
          marginTop: '5px',
          width: 'calc(100% - 20px)',
          overflow: 'auto',
          padding: '10px'
        }}
      >
        {currentPage}
      </Paper>
    </AppContainer>
  )
})
