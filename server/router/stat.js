const stringRandom = require("string-random");
const getStatList = require("./data/getStatList")
module.exports = [
    {
        method: "get",
        path: "/api/stat/:questionId",
        fn: function (ctx) {
            ctx.body = {
                errno: 0,
                data: {
                    total: 100,
                list: getStatList()
                }
            }
        }
    },
    {
        method: "get",
        path: "/api/stat/:questionId/:componentId",
        fn: function (ctx) {
            ctx.body = {
                errno: 0,
                data: {
                    stat: [
                        { name: '选项1', count: 20 },
                        { name: '选项2', count: 10 },
                        { name: '选项3', count: 25 },
                    ]
                }
            }
        }
    },
]