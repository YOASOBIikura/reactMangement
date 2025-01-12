import {Menu} from "antd";
import {Layout} from "antd";
import * as Icon from '@ant-design/icons';
import MenuConfig from "../../config"
import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const {Sider} = Layout;
const CommonAside = (props)=>{

    const {setPath} = props
    const location = useLocation()
    const [selectKey, setSelectKey] = useState("")

    const handleClick = ({ key })=>{
        let path = key
        console.log(path)
        console.log(location.pathname)
        setPath(key)
    }

    useEffect(() => {
        console.log(location.pathname)
        setSelectKey(location.pathname)
    }, [location.pathname]);

    // 动态获取Icon
    const iconToElement = (icon) => React.createElement(Icon[icon])

    // 处理菜单数据
    const items = MenuConfig.map((item)=>{
        const child = {
            key: item.path,
            label: item.label,
            icon: iconToElement(item.icon)
        }
        // 添加子菜单
        if(item.children) {
            child.children = item.children.map((childItem) => {
                return {
                    key: childItem.path,
                    label: childItem.label,
                    icon: iconToElement(childItem.icon)
                }
            })
        }
        return child
    })

    return <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <h3 className="app-name">{props.collapsed?'后台':'React后台管理系统'}</h3>
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/main']}
            selectedKeys={[selectKey]}
            style={{
                height: '100%'
            }}
            onClick={handleClick}
            items={items}
        />
    </Sider>
}

export default CommonAside