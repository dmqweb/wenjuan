module.exports = [
    // 收集（新建）答卷
    {
        method: "get",
        path: "/api/answer",
        fn:function (ctx) {
            ctx.body = {
                errno: 0,
                data:"创建问卷"
            }
        }
    }
  ]