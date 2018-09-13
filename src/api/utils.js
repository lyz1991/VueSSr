/**
 * Created by mac on 2018/9/13.
 */
export let conver = (params = {}) => {
  return Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
}