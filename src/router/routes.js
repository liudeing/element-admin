/**
 * Created by ldp on 2016/12/15.
 */
import Login from '../components/Login'
import Home from '../components/Home'
import Table from '../components/nav1/Table'

export default [
  {
    path: '/login',
    component: Login,
    hidden: true // 不显示在导航中
  },
  {
    path: '/',
    component: Home,
    name: '导航一',
    iconCls: 'el-icon-message', // 图标样式class
    children: [
      { path: '/table', component: Table, name: 'Table' }
    ]
  }
]
