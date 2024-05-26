import Mock from 'mockjs'
Mock.mock('/api/test', 'get', () => {
  return {
    errno: 0,
    data: {
      name: `你好世界 ${Date.now()}`,
    },
  }
})
