/**
 * Created by ldp on 2016/12/15.
 */
import { AuthResource } from '../http/http.interceptors'

export default {
  login: user => {
    return AuthResource.get({ id: user.password })
  },
  logout: () => {

  },
  getUserInfo: () => {

  }
}
