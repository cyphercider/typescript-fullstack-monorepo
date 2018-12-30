export async function fetchBodyPost(
  url: string,
  reqBodyObject: Object,
  authorizationHeaderValue: string | null = null
) {
  try {
    let params: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(reqBodyObject)
    }

    if (authorizationHeaderValue != null && params.headers != null) {
      params.headers['Authorization'] = authorizationHeaderValue
    }

    const res = await fetch(url, params)
    return await res.json()
  } catch (err) {
    console.error(`Problem calling fetch post from gui utils`)
    throw err
  }
}

export async function fetchBodyGet(
  url: string,
  authorizationHeaderValue: string | null = null
) {
  try {
    let params: RequestInit = {
      method: 'GET',
      mode: 'cors',
      headers: {}
    }

    if (authorizationHeaderValue != null && params.headers != null) {
      params.headers['Authorization'] = authorizationHeaderValue
    }

    const resRaw = await fetch(url, params)
    const res = await resRaw.json()
    // console.log(`returning`)
    // console.log(JSON.stringify(res))
    return res
  } catch (err) {
    console.error(`Problem calling fetch post from gui utils`)
    throw err
  }
}
