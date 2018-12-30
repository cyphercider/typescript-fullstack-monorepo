import { sign, verify } from 'jsonwebtoken'

export interface StringContainer {
  string: string
}

export function signJwt(payload: any, secretKey: string): string {
  return sign(payload, secretKey)
}

export function verifyJwt(jwt: string, secretKey: string): any {
  return verify(jwt, secretKey) as StringContainer
}
