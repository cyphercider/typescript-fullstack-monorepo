export interface BaseServerConfig {
  port: number
  version: string
  authSecretKey: string
  configEnvironmentVariable: string
  rootDir: string
  nodeEnvironment: 'production' | 'development'
}
