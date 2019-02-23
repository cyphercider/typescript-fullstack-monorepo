import { sign, verify } from 'jsonwebtoken'

/**
 * @returns {string} token
 */
export function signJwt(payload: any, secretKey: string): string {
  return sign(payload, secretKey)
}

/**
 * @returns {string} decoded token
 */
export function verifyJwt(jwt: string, secretKey: string): string {
  return verify(jwt, secretKey)
}
