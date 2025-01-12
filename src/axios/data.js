

const tableData = [
    {
        key: '1',
        name: 'oppo',
        dateSale: 500,
        monthSale: 3500,
        sunSale: 22000
    },
    {
        key: '2',
        name: 'vivo',
        dateSale: 300,
        monthSale: 2200,
        sunSale: 24000
    },
    {
        key: '3',
        name: '苹果',
        dateSale: 800,
        monthSale: 4500,
        sunSale: 65000
    },
    {
        key: '4',
        name: '小米',
        dateSale: 1200,
        monthSale: 6500,
        sunSale: 45000
    },
    {
        key: '5',
        name: '三星',
        dateSale: 300,
        monthSale: 2000,
        sunSale: 34000
    },
    {
        key: '6',
        name: '魅族',
        dateSale: 350,
        monthSale: 3000,
        sunSale: 22000
    }
]

const tableColumns = [
    {
        key: 'name',
        title: '品牌',
        dataIndex: 'name',
    },
    {
        key: 'dateSale',
        title: '今日购买',
        dataIndex: 'dateSale',
    },
    {
        key: 'monthSale',
        title: '本月购买',
        dataIndex: 'monthSale',
    },
    {
        key: 'sunSale',
        title: '总购买',
        dataIndex: 'sunSale',
    }
]

const countData = [
    {
        name: "今日订单",
        value: 1234,
        icon: "CheckCircleOutlined",
        color: "#2ec7c9"
    },
    {
        name: "今日收藏订单",
        value: 3421,
        icon: "ClockCircleOutlined",
        color: "#ffb980"
    },
    {
        name: "今日未支付订单",
        value: 1234,
        icon: "InfoCircleOutlined",
        color: "#5ab1ef"
    },
    {
        name: "本月支付订单",
        value: 1234,
        icon: "CheckCircleOutlined",
        color: "#2ec7c9"
    },
    {
        name: "本月收藏订单",
        value: 3421,
        icon: "ClockCircleOutlined",
        color: "#ffb980"
    },
    {
        name: "本月未支付订单",
        value: 1234,
        icon: "InfoCircleOutlined",
        color: "#5ab1ef"
    }
]

const echartData = {
    xdata: [
        {
            "苹果": 247,
            "vivo": 467,
            "小米": 234,
            "oppo": 432,
            "三星": 234,
            "魅族": 356,
        },
        {
            "苹果": 756,
            "vivo": 412,
            "小米": 1234,
            "oppo": 354,
            "三星": 111,
            "魅族": 348,
        },
        {
            "苹果": 456,
            "vivo": 185,
            "小米": 432,
            "oppo": 156,
            "三星": 843,
            "魅族": 121,
        },
        {
            "苹果": 1123,
            "vivo": 675,
            "小米": 146,
            "oppo": 451,
            "三星": 765,
            "魅族": 313,
        },
        {
            "苹果": 762,
            "vivo": 1156,
            "小米": 314,
            "oppo": 832,
            "三星": 334,
            "魅族": 856,
        },
        {
            "苹果": 947,
            "vivo": 867,
            "小米": 534,
            "oppo": 632,
            "三星": 734,
            "魅族": 856,
        },
        {
            "苹果": 1247,
            "vivo": 567,
            "小米": 1234,
            "oppo": 932,
            "三星": 134,
            "魅族": 156,
        },
        {
            "苹果": 847,
            "vivo": 367,
            "小米": 934,
            "oppo": 832,
            "三星": 534,
            "魅族": 656,
        },
        {
            "苹果": 111,
            "vivo": 456,
            "小米": 321,
            "oppo": 753,
            "三星": 841,
            "魅族": 789,
        },
        {
            "苹果": 547,
            "vivo": 267,
            "小米": 334,
            "oppo": 532,
            "三星": 234,
            "魅族": 356,
        },
        {
            "苹果": 847,
            "vivo": 567,
            "小米": 1134,
            "oppo": 532,
            "三星": 934,
            "魅族": 856,
        },
        {
            "苹果": 1147,
            "vivo": 867,
            "小米": 1334,
            "oppo": 132,
            "三星": 834,
            "魅族": 556,
        },
        {
            "苹果": 447,
            "vivo": 667,
            "小米": 834,
            "oppo": 932,
            "三星": 134,
            "魅族": 156,
        },
        {
            "苹果": 647,
            "vivo": 567,
            "小米": 434,
            "oppo": 332,
            "三星": 234,
            "魅族": 156,
        }
    ],
    date:['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
}

const userData = [
    {
        date: '周一',
        new: 5,
        active: 200
    },
    {
        date: '周二',
        new: 10,
        active: 500
    },
    {
        date: '周三',
        new: 12,
        active: 550
    },
    {
        date: '周四',
        new: 60,
        active: 800
    },
    {
        date: '周五',
        new: 65,
        active: 550
    },
    {
        date: '周六',
        new: 53,
        active: 770
    },
    {
        date: '周日',
        new: 33,
        active: 170
    },
]

const videoData = [
    {
        name: '小米',
        value: 2999
    },
    {
        name: '苹果',
        value: 5999
    },
    {
        name: 'vivo',
        value: 1500
    },
    {
        name: 'oppo',
        value: 1999
    },
    {
        name: '魅族',
        value: 2200
    },
    {
        name: '三星',
        value: 4500
    },
]
export {tableData, tableColumns, countData, echartData, userData, videoData}