module.exports = [
    {
        method: "get",
        path: "/test",
        fn:function (ctx) {
            ctx.body = {
                errno: 0,
                msg: "error",
                data:"测试页面"
            }
        }
    }
]