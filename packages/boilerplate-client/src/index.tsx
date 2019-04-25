import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ErrorBoundary } from '@appkit-client/index'
import RootStore from '@client/stores/RootStore'
import { configure } from 'mobx'
import { App } from './components/App'
import { AppPageProvider } from './context/AppPageContext'

configure({ enforceActions: 'observed' })

const store = new RootStore()

console.log(`created root store ${typeof store}`)
export const StoreContext: React.Context<RootStore> = React.createContext(store)
console.log(`created store context ${typeof StoreContext}`)

async function renderView() {
  await store.initAllStores()
  ReactDOM.render(
    <ErrorBoundary>
      <AppPageProvider>
        <App />
      </AppPageProvider>
    </ErrorBoundary>,
    document.getElementById('root')
  )
}

renderView()
