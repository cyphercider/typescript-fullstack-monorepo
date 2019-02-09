import * as React from 'react'
import { runInAction } from 'mobx'
import {
  Home,
  HooksDemo,
  ComponentsDemo,
  ServerApiDemo
} from '@bpc/pages/index'
import { AppContainer } from '@appkit-client/index'
import { AppkitMenuItem } from '@appkit-client/index'
import { AppPage } from '@bpc/stores/ViewStore'
import { Paper } from '@material-ui/core'
import { config } from '../config/config'
import { ConditionalModals } from './app/ConditionalModals'
import jss from 'jss'
import jssPreset from 'jss-preset-default'
import { useComputed, observer } from 'mobx-react-lite'
import { StoreContext } from '@bpc/index'

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
  const store = React.useContext(StoreContext)
  const currentPage: JSX.Element = useComputed(() => {
    console.log(`in useComputed on apppage ${store.viewStore.currentPage}`)
    switch (store.viewStore.currentPage) {
      case AppPage.Home:
        return <Home />
      case AppPage.ComponentsDemos:
        return <ComponentsDemo />
      case AppPage.ServerApiDemo:
        return <ServerApiDemo />
      case AppPage.HooksDemo:
        return <HooksDemo />
      default:
        throw new Error(`Unknown page ${store.viewStore.currentPage}`)
    }
  })

  const menuItems: AppkitMenuItem[] = useComputed(() => {
    return [
      {
        name: 'Home',
        onClick: () => {
          store.viewStore.setPage(AppPage.Home)
        }
      },
      {
        name: 'Components Demo',
        onClick: () => {
          store.viewStore.setPage(AppPage.ComponentsDemos)
        }
      },
      {
        name: 'Server API Demo',
        onClick: () => {
          store.viewStore.setPage(AppPage.ServerApiDemo)
        }
      },
      {
        name: 'Hooks Demo',
        onClick: () => {
          store.viewStore.setPage(AppPage.HooksDemo)
        }
      }
    ]
  })

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
