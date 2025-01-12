import Mock from 'mockjs'

const Random = Mock.Random

const userData = Mock.mock('/main/getUserData', "get", {
    "list|20": [
        {
            "key|+1": 1,
            "id|+1": 1,
            "name": Random.cname(),
            "age|18-60": 18,
            "sex|1": ["男", "女"],
            "birthday": Random.date(),
            "address": Random.region() + Random.province() + Random.city() + Random.county(true),
        }
    ],
    code: 200,
    message: "success"
})

export {userData}