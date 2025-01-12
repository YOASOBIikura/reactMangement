import { Layout, theme } from 'antd';
import {useEffect, useState} from "react";
import CommonAside from "../../component/commenAside";
import CommonHeader from "../../component/commenHeader";
import {Outlet, useNavigate} from "react-router-dom";
import {getUsers} from "../../axios/api";
const {  Content } = Layout;

const Home = ()=> {
    const [collapsed, setCollapsed] = useState(false);
    const [path, setPath] = useState("/main")
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();

    useEffect(() => {
        navigate(path)
    }, [path]);

    return <Layout className="main-container">
        <CommonAside collapsed={collapsed} setPath={setPath}/>
        <Layout>
            <CommonHeader colorBgContainer={colorBgContainer} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Outlet />
            </Content>
        </Layout>
    </Layout>
}

export default Home