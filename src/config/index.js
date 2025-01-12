
export default [
    {
        path: '/main',
        name: 'main',
        label: '首页',
        icon: 'HomeOutlined',
        url: '/home/main'
    },
    {
        path: '/mall',
        name: 'mall',
        label: '商品管理',
        icon: 'ShopOutlined',
        url: '/mall/mall'
    },
    {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'UserOutlined',
        url: '/user/user'
    },
    {
        path: '/other',
        name: 'other',
        label: '其他',
        icon: 'SettingOutlined',
        children: [
            {
                path: '/other/pageOne',
                name: 'page1',
                label: '页面1',
                icon: 'SettingOutlined',
            },
            {
                path: '/other/pageTwo',
                name: 'page2',
                label: '页面2',
                icon: 'SettingOutlined',
            }
        ]
    }
]