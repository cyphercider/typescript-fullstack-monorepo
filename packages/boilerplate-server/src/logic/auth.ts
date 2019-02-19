import * as authUtil from '@appkit-server/util/auth'
import {
  LoginRequest,
  LoginResponse,
  CheckTokenRequest,
  CheckTokenResponse
} from '@appkit-common/model/auth'
import { config } from '@server/config/config'

export async function login(req: LoginRequest): Promise<LoginResponse> {
  if (
    req.credentials.userName === 'admin' &&
    req.credentials.password === 'admin'
  ) {
    const jwt = authUtil.signJwt(
      { string: req.credentials.userName },
      config.authSecretKey
    )
    return {
      succeeded: true,
      token: jwt,
      user: config.defaultUser,
      serverVersion: config.version
    }
  } else {
    throw new Error(`Login failed`)
  }
}

export async function checkToken(
  req: CheckTokenRequest
): Promise<CheckTokenResponse> {
  try {
    authUtil.verifyJwt(req.token, config.authSecretKey)
    return {
      succeeded: true,
      serverVersion: config.version,
      user: config.defaultUser
    }
  } catch (err) {
    throw new Error(`Error validating token! ${err} `)
  }
}
