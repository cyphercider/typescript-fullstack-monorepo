import {
  LoginRequest,
  LoginResponse
  // LoginResponse,
  // CheckTokenRequest,
  // CheckTokenResponse
} from '@appkit-common/model/auth'
import * as authUtil from '@appkit-server/util/auth'
import { config } from '@bps/config/config'

import { Express } from 'express'

export function makeRoutes(app: Express) {
  // app.get('/test/hello', async (req, res) => {
  //   res.send('Hello')
  // })

  app.post('/auth/login', async (req, res) => {
    const reqBody = req.body as LoginRequest
    // first check password. if OK, then provide a token based on the user name
    const token = authUtil.signJwt(
      { userName: reqBody.credentials.userName },
      config.authSecretKey
    )
    const loginResponse: LoginResponse = {
      succeeded: true,
      token: token,
      user: {
        userName: reqBody.credentials.userName,
        email: '',
        firstName: '',
        lastName: ''
      },
      serverVersion: config.version
    }
    res.json(loginResponse)
  })
}

// @Path('/auth')
// export class AuthService {
//   @Path('/login')
//   @POST
//   async login(
//     req: LoginRequest,
//     @HeaderParam('authorization') authToken: string
//   ): Promise<LoginResponse> {
//     return {
//       succeeded: false,
//       token: '',
//       user: null,
//       serverVersion: null
//     }
//   }

//   @Path('/checkToken')
//   @POST
//   async checkToken(
//     req: CheckTokenRequest,
//     @HeaderParam('authorization') authToken: string
//   ): Promise<CheckTokenResponse> {
//     return {
//       succeeded: false,
//       user: null,
//       serverVersion: null
//     }
//   }
// }
