const Koa = require('koa');
const app = new Koa();
const router = require("./router/router")

// 直接写不是一个好的方式
router.get("/", async (ctx) => {
    ctx.body = "欢迎来到首页"
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8080, () => {
    console.log("8080端口启动成功");
});