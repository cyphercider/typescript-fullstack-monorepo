import { User } from '@appkit-common/model/auth'
import { Theme } from '@material-ui/core'
import * as React from 'react'

export interface MarkdownTheme {
  h1?: React.CSSProperties
  h2?: React.CSSProperties
  h3?: React.CSSProperties
  h4?: React.CSSProperties
  h5?: React.CSSProperties
  h6?: React.CSSProperties
  p?: React.CSSProperties
  li?: React.CSSProperties
}

export interface ClientBaseConfig {
  /**
   * This is the name of the app - e.g. to be displayed in the app title bar
   */
  appName: string
  /**
   * This is the fully qualified server host for server API calls- i.e. protocol://host:port
   */
  host: string
  /**
   * If you have multiple application instances - this can keep track of the name of the instance you are in
   */
  instanceName: string
  /**
   * The client build version
   */
  clientVersion: string
  /**
   * The server build version.  Will be received from server upon login
   */
  serverVersion: string | null
  /**
   * The current logged in user.  Useful for displaying profile information to the user.
   */
  user: User | null
  /**
   * Whether or not our app is running in development mode
   */
  inDevelopment: boolean
  muiTheme: Theme
  markdownTheme: MarkdownTheme
}
