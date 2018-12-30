import * as React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { AppBar } from './AppBar'
import { AppkitMenuItem } from '../model'
import { ClientBaseConfig } from '@appkit-client/model/config'
import { ListMenu } from './ListMenu'
import { MuiThemeProvider } from '@material-ui/core/styles'

export interface AppkitContainerProps {
  menuItems: AppkitMenuItem[]
  config: ClientBaseConfig
  loggedIn: boolean
  loginAction: () => void
  logoutAction: () => void
  children?: JSX.Element | JSX.Element[]
}

export const AppContainer = (props: AppkitContainerProps) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  return (
    <div
      id="app-container"
      onClickCapture={() => {
        setDrawerOpen(false)
      }}
    >
      <MuiThemeProvider theme={props.config.muiTheme}>
        <AppBar
          logoutAction={props.logoutAction}
          loginAction={props.loginAction}
          leftMenuOnClick={() => {
            setDrawerOpen(!drawerOpen)
          }}
          title={props.config.appName + ' ' + (props.config.instanceName || '')}
          loggedIn={props.loggedIn}
        />
        <Drawer open={drawerOpen}>
          <ListMenu menuItems={props.menuItems} />
        </Drawer>
        <div
          id="app-body"
          style={{
            height: 'calc(100vh - 50px)',
            width: 'calc(100vw - 35px)',
            padding: '10px',
            position: 'absolute',
            top: '50px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {props.children}
        </div>
      </MuiThemeProvider>
    </div>
  )
}
