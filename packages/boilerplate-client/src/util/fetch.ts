import * as fetchUtil from '@appkit-client/util/fetch'
import { config } from '@bpc/config/config'

export async function postToServerNow(
  endpoint: string,
  body: Object
): Promise<any> {
  return await fetchUtil.fetchBodyPost(config.host + endpoint, body)
}

export async function getFromServerNow(endpoint: string): Promise<any> {
  return await fetchUtil.fetchBodyGet(config.host + endpoint)
}
