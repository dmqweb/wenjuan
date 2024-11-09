const Random = require("string-random")
const getComponentList = require("./getComponentList")
module.exports = function getStatList(len = 10) {
    const componentList = getComponentList()
    const res = []
    for (let i = 0; i < len; i++) {
        // 一个用户的答卷
        const stat = {
            _id: Random(6)
        }
        // 增加各个组件的 id value
        componentList.forEach(c => {
            const { fe_id, type, props } = c

            switch(type) {
                case 'questionInput':
                    stat[fe_id] = Random(6)
                    break
                case 'questionTextarea':
                    stat[fe_id] = Random(6)
                    break
                case 'questionRadio':
                    stat[fe_id] = props.options[0].text
                    break
                case 'questionCheckbox':
                    stat[fe_id] = `${props.list[0].text},${props.list[1].text}`
                    break
            }
        })
        res.push(stat)
    }
    return res
}
