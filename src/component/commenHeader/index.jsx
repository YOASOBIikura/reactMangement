import {Button, Dropdown} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined, SmileOutlined} from "@ant-design/icons";
import {Layout} from "antd";
import Avatar from "antd/es/avatar/avatar";
const {Header} = Layout;

const CommonHeader = (props)=>{

    const handleClick = (e) => {
        console.log('click ', e);
    };


    const items = [
        {
            key: '1',
            label: (
                <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
                    我的
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
                    退出登录
                </a>
            ),
        },
    ];

    return <Header
        style={{
            padding: "0 30px",
            background: props.colorBgContainer,
            backgroundColor: '#001529',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}
    >
        <Button
            type="text"
            icon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => props.setCollapsed(!props.collapsed)}
            style={{
                fontSize: '16px',
                width: 64,
                height: 32,
                backgroundColor: '#fff'
            }}
        />
        <Dropdown
            menu={{items}}
        >
            <Avatar size={36} src={<img src={require("../../assets/images/head.png")}/>}/>
        </Dropdown>
    </Header>
}

export default CommonHeader