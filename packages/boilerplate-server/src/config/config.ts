import { version } from './version'
import { BaseServerConfig } from '@appkit-server/model/config'
import { getServerConfigEnvVar } from '@appkit-server/util/env'
import { User } from '@appkit-common/model/auth'

interface Config extends BaseServerConfig {
  publicPath: string
  userDocsPath: string
  defaultUser: User
}

let initConfig: Config = {
  publicPath: '/public',
  userDocsPath: '/docs',
  authSecretKey: 'secretkey',
  port: 3000,
  version: version,
  rootDir: process.cwd(),
  configEnvironmentVariable: 'BOILERPLATE_SERVER_CONFIG',
  nodeEnvironment: 'development',
  defaultUser: {
    userName: 'admin',
    firstName: 'admin',
    lastName: 'admin',
    email: ''
  }
}

const nodeEnv = process.env.NODE_ENV

if (
  nodeEnv != null &&
  nodeEnv
    .trim()
    .toLowerCase()
    .substr(0, 3) === 'dev'
) {
  initConfig.nodeEnvironment = 'development'
} else {
  initConfig.nodeEnvironment = 'production'
}

if (initConfig.nodeEnvironment === 'production') {
  initConfig = {
    ...initConfig,
    ...(getServerConfigEnvVar(initConfig.configEnvironmentVariable) as any)
  }
}

export const config = initConfig
