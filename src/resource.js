/**
 * Created by ldp on 2016/12/28.
 */
const env = process.env.SERVER_ENV
let base
let baseapi
if (env === 'online') {
  base = 'https://domain:5001/web/'
  baseapi = 'https://domain:5001/api/'
} else if (env === 'local') {
  base = 'http://localhost:5566/web/'
  baseapi = 'http://localhost:5566/api/'
}

export const USER = `${base}users`
export const INDEX = `${baseapi}index`
