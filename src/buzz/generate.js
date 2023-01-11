import { writeText } from 'https://deno.land/x/copy_paste/mod.ts'

export const generateDeepLink = async ({ appId, startPagePath, startPageQuery }) => {
  const Prefix = 'bnc://app.binance.com/mp/app'
  const pars = {
    appId,
    startPagePath: btoa(startPagePath),
    startPageQuery: btoa(startPageQuery),
  }
  const parsStr = Object.keys(pars)
    .reduce((prev, item) => {
      prev.push(`${item}=${pars[item]}`)
      return prev
    }, [])
    .join('&')

  const deepLink = `${Prefix}?${parsStr}`

  console.log('\n👇 Deep link generated.')
  console.log(`\n${deepLink}\n`)

  try {
    await writeText(deepLink)
    console.log('Copied\n')
  } catch (e) {
    //
  }

  return deepLink
}
