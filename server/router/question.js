const Random = require("string-random")
const getQuestionList = require("./data/getQuestionList");
const getComponentList = require("./data/getComponentList")
module.exports = [
    {
        method: "get",
        path: "/api/question/:id",
        fn: function (ctx) {
            ctx.body = {
                errno: 0,
                data: {
                    id: Random(6),
                    title: Random(4),
                    desc: '问卷描述',
                    js: '',
                    css: '',
                    isDeleted: false,
                    isPublished: true,
                    componentList: getComponentList()
                }
            }
        }
    },    {
        method: "post",
        path: "/api/question",
        fn: function (ctx) {
            const { url = "", query = {} } = ctx;
            const isDeleted = url.indexOf("isDeleted=true") >= 0;
            const isStar = url.indexOf('isStar=true') >= 0;
            const pageSize = parseInt(query.pageSize) || 10;
            ctx.body = {
                errno: 0,
                data: {
                    list: getQuestionList({ len: pageSize, isDeleted, isStar }),
                    total:100
                }
            }
        }
    },
    {
        method: "patch",
        path: "/api/question/:id",
        fn: function (ctx) {
            ctx.body = {
                errno: 0,
            }
        }
    }, //赋值问卷
    {
        method: "post",
        path: "/api/question/duplicate/:id",
        fn: function (ctx) {
            ctx.body = {
                errno: 0,
                data: {
                    id:Random(6)
                }
            }
        }
    },
    {
        method: "delete",
        path: "/api/question",
        fn: function (ctx) {
            ctx.body = {
                errno: 0,
            }
        }
    },
]