export interface Credentials {
  userName: string
  password: string
}

export interface User {
  userName: string
  email: string
  firstName: string
  lastName: string
}

export interface LoginRequest {
  credentials: Credentials
}

export interface LoginResponse {
  succeeded: boolean
  token: string
  user: User
  serverVersion: string
}

export interface CheckTokenRequest {
  token: string
}

export interface CheckTokenResponse {
  succeeded: boolean
  user: User
  serverVersion: string
}
