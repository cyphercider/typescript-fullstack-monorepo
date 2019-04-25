import { ClientBaseConfig } from '@appkit-client/model/config'
import { User } from '@appkit-common/model/auth'
import { blueMarkdownTheme, blueMuiTheme } from '@appkit-client/index'

declare var process

export const config: ClientBaseConfig = {
  appName: 'Boilerplate Client',
  host: window.location.origin,
  instanceName: 'Development',
  clientVersion: '1.0.0',
  serverVersion: null,
  user: null,
  inDevelopment: process.env.NODE_ENV === 'development',
  muiTheme: blueMuiTheme,
  markdownTheme: blueMarkdownTheme
}

if (config.inDevelopment === true) {
  config.host = 'http://localhost:3000'
}

// console.log(`config object: ${JSON.stringify(config)}`)
// console.log(`process object: ${JSON.stringify(process)}`)

export function setServerVersion(version: string) {
  config.serverVersion = version
}

export function setUser(user: User) {
  config.user = user
}
