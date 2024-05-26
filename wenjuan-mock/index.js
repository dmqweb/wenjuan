const Koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock/index')
const app = new Koa() //使用koa创建一个app应用
const router = new Router() //koa-router创建router路由
async function getRes(fn, ctx) {
    return new Promise(resolve => {
        setTimeout(() => {
            const res = fn(ctx)
            resolve(res)
        }, 10)
    })
}
//mockList全是对象组成的数组，对象包含属性：url,method,response,response返回的就是路由返回的数据
// 注册 mock 路由
mockList.forEach(item => {
    //路由需要通过使用koa-router中创建的router实例进行注册。
    const { url, method, response } = item
    router[method](url, async ctx => {
        const res = await getRes(response, ctx) // 模拟网络请求的加载状态，1s
        ctx.body = res // 输入结果
    })
})
app.use(router.routes())
app.listen(3001) // port 端口
