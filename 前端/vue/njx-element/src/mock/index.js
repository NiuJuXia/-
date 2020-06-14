const Mock = require('mockjs')

Mock.mock('http://mockjs', 'get', {
  code: 0,
  data: {
    username: 'zhangsan'
  },
  msg: 'success'
})

console.log('mock')
