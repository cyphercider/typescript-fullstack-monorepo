export async function delay(msDelay: number): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, msDelay)
  })
}
