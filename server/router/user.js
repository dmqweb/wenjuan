const stringRandom = require("string-random")
module.exports = [
    {
        method: "post",
        path: "/api/user/register",
        fn: function (ctx) {
            ctx.body = {
                errno: 0,
                msg: "error",
                data:"注册失败"
            }
        }
    },
    // 获取用户信息
    {
        method: "get",
        path: "/api/user/info",
        fn: function (ctx) {
            ctx.body = {
                errno: 0,
                msg: "获取到信息",
                data: {
                    username: stringRandom(6),
                    nickname:stringRandom(6)
                }
            }
        }
    },
    // 登录
    {
        method: "post",
        path: "/api/user/login",
        fn: function (ctx) {
            ctx.body = {
                errno: 0,
                msg: "用户登录成功",
                data: {
                    token:stringRandom(20)
                }
            }
        }
    }
]