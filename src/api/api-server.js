import fetch from 'node-fetch';
import { conver } from './utils'
const $$ = {
  async get(url, params) {
    const res = await  fetch(`${url}?${conver(params)}`)
    return res.json()
  }
}
export default $$
