import * as fetchUtil from '@client/util/fetch'
import * as authModel from '@appkit-common/model/auth'

const endpoints = {
  getHello: '/test/hello',
  login: '/auth/login'
}

export async function login(
  req: authModel.LoginRequest
): Promise<authModel.LoginResponse> {
  return await fetchUtil.postToServerNow(endpoints.login, req)
}

export async function getHello(): Promise<authModel.LoginResponse> {
  return await fetchUtil.getFromServerNow(endpoints.getHello)
}
