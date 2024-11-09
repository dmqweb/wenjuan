const Random = require("string-random")
function getQuestionList(opt = {}) {
    const { len = 10, isDeleted = false, isStar = false } = opt
    const list = []
    for (let i = 0; i < len; i++) {
        list.push({
            _id: Random(6),
            title: Random(6),
            isPublished: Random(6),
            isStar,
            answerCount: Random(16,"01"),
            createdAt: Random(6),
            isDeleted,  // 假删除
        })
    }
    return list
}
module.exports = getQuestionList
