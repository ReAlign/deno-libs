// @ts-ignore
import file from './egg.json' assert { type: 'json' }

import BDL from './biz.js'

// @ts-ignore
const [scene, param] = Deno.args

const DL = { ...BDL }

if (scene === 'help') {
  const X = `https://x.nest.land/${file.name}@${file.version}/mod.ts`
  const BASE = `deno run --allow-run ${X}`
  const scenes = `<${Object.keys(DL).join('|')}>`
  const params = '<matched id>'
  console.log(`\n${BASE} ${scenes} ${params}\n`)
  console.log(`\neg: ${BASE} post 1234\n`)
} else {
  if (DL[scene] && param) {
    DL[scene](param)
  } else {
    console.log('Args parse error!')
  }
}