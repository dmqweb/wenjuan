const Router = require("koa-router")
const router = new Router()
const testList = require("./test")
const userList = require("./user")
const statList = require("./stat")
const questionList = require("./question")
const answerList = require("./answer")
const routerList = [
    ...testList,
    ...userList,
    ...statList,
    ...questionList,
    ...answerList
]
routerList.forEach(item => {
    router[item.method](item.path, item.fn);
})
module.exports = router;