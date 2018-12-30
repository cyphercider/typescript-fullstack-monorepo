import * as React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { default as MuiAppbar } from '@material-ui/core/AppBar'

export interface AppBarProps {
  leftMenuOnClick: () => void
  title: string
  loggedIn: boolean
  loginAction: () => void
  logoutAction: () => void
}

export const AppBar = (props: AppBarProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  // @observable anchorEl: any = null

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div
      id="appkit-appbar-simple"
      style={{ width: '100vw', left: '0px', top: '0px', position: 'fixed' }}
    >
      <MuiAppbar position="static" style={{ height: '50px' }}>
        <Toolbar disableGutters style={{ minHeight: '100%' }}>
          <div
            id="menu-and-title"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexGrow: 2
            }}
          >
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={() => {
                props.leftMenuOnClick()
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              {props.title}
            </Typography>
          </div>
          <div id="account-btn-and-menu" style={{ flex: '0 0 40px' }}>
            <IconButton
              aria-owns={anchorEl != null ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {' '}
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={anchorEl != null}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My Account</MenuItem>
              {props.loggedIn && (
                <MenuItem
                  onClick={() => {
                    props.logoutAction()
                    handleClose()
                  }}
                >
                  Log Out
                </MenuItem>
              )}
              {!props.loggedIn && (
                <MenuItem
                  onClick={() => {
                    props.loginAction()
                    handleClose()
                  }}
                >
                  Log In
                </MenuItem>
              )}
            </Menu>
          </div>
        </Toolbar>
      </MuiAppbar>
    </div>
  )
}
