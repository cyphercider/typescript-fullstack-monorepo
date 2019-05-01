import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ErrorBoundary } from '@appkit-client/index'
import RootStore from '@client/stores/RootStore'
import { configure } from 'mobx'
import { App } from './components/App'
import { reduxStore } from './stores/redux-store'
import { StoreContext } from 'redux-react-hook'

configure({ enforceActions: 'observed' })

// mobx store
const mobxStore = new RootStore()
export const MobxStoreContext: React.Context<RootStore> = React.createContext(
  mobxStore
)

// redux store

async function renderView() {
  await mobxStore.initAllStores()
  ReactDOM.render(
    <ErrorBoundary>
      <MobxStoreContext.Provider value={mobxStore}>
        <StoreContext.Provider value={reduxStore}>
          <App />
        </StoreContext.Provider>
      </MobxStoreContext.Provider>
    </ErrorBoundary>,
    document.getElementById('root')
  )
}

renderView()
