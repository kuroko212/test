const { mock, Random } = require("mockjs");

let data = mock({
    "list|100":[
        {
            title:Random.cword(8,20),
            "city|1": ['上海市','江苏省','浙江省'],
            "time|1-10":1
        }
    ]
})

mock('/getList',data.list)