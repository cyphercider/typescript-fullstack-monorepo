import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ErrorBoundary } from '@appkit-client/index'
import RootStore from '@client/stores/RootStore'
import { configure } from 'mobx'
import { App } from './components/App'
import { AppPageProvider } from './context/AppPageContext'
import {
  StoreContext as ReduxStoreContext,
  reduxStore
} from './stores/ReduxStore'

configure({ enforceActions: 'observed' })

// mobx store
const store = new RootStore()

// redux store

console.log(`created root store ${typeof store}`)
export const StoreContext: React.Context<RootStore> = React.createContext(store)
console.log(`created store context ${typeof ReduxStoreContext}`)

async function renderView() {
  await store.initAllStores()
  ReactDOM.render(
    <ErrorBoundary>
      <ReduxStoreContext.Provider value={reduxStore}>
        <AppPageProvider>
          <App />
        </AppPageProvider>
      </ReduxStoreContext.Provider>
    </ErrorBoundary>,
    document.getElementById('root')
  )
}

renderView()
