import React from 'react';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    HomeOutlined,
    SearchOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    WalletOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Input, Layout, Menu, theme } from 'antd';
import { BiChart, BiShoppingBag } from 'react-icons/bi';
import { MdMailOutline, MdReport } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import styled from 'styled-components';
import { RiAppsFill } from 'react-icons/ri';
import { GoGear } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
    background: '#202028',
};
const StyledMenu = styled(Menu)`

    background-color: #202028;
    & .ant-menu-item{
        color:#fff;
        & :hover{
            color:#7294fb;
        };
    };
    & .ant-menu-item.ant-menu-item-selected{
        background-color:transparent;
        color:#7294fb;
        border-left:3px solid #7294fb;
        border-radius:0; 
    };
    
 

`;
const StyledNav = styled.nav`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
`;
const StyledSearchbar = styled(Input)`
 background: #45464b;
 color:#fff;
 border:none;
box-shadow:0px 0px 2px #fff;
transition:all 0.5s ease;
&.ant-input-affix-wrapper-focused{
    background: #45464b;
 color:#fff;
 border:none;
box-shadow:0px 0px 2px #fff;

};
 &:hover{
    background: #45464b;
    color:#fff;
    border:none;
    box-shadow:0px 0px 5px #fff;
 };
 & ::placeholder{
    color:#fff;
 };

`;
const items = [
    HomeOutlined,
    BiChart,
    TbReportAnalytics,
    WalletOutlined,
    BiShoppingBag,

].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));
const CommonLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout hasSider>

            <Sider style={siderStyle} collapsed collapsedWidth={50}>
                <div className="demo-logo-vertical" >
                    <RiAppsFill size={32} color='#7294fb' />
                </div>
                <StyledMenu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
            </Sider>
            <Layout

                style={{
                    marginInlineStart: 50,
                    background: '#141416',
                    height:'100vh',
                    overflow:'hidden'
                }}
            >
                <Header
                    style={{
                        // position: 'sticky',
                        // top: 0,
                        // zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        background: '#202028',
                        padding: '0 20px',
                    }}
                >
                    <StyledNav>
                        <div><StyledSearchbar placeholder=" Search" prefix={<SearchOutlined />} /></div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 5
                        }}>
                            <Avatar style={{ background: '#45464b' }} size="small" icon={<MdMailOutline />} />
                            <Avatar style={{ background: '#45464b' }} size="small" icon={<GoGear />} />
                            <Badge dot color='#7294fb' styles={{
                                root: {
                                    lineHeight: 1
                                }, indicator: {
                                    top: 5,
                                    right: 5
                                }
                            }}><Avatar style={{ background: '#45464b' }} size="small" icon={<IoMdNotificationsOutline />} /></Badge>
                            <Avatar style={{ background: '#45464b' }} size="small" src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                        </div>
                    </StyledNav>
                </Header>
                <Content
                    style={{
                        padding: '24px 16px 0',
                        height: 'calc(100vh - 64px)',
                        overflowY:'auto',


                    }}
                >
<Outlet/>
                </Content>

            </Layout>
        </Layout>
    );
};
export default CommonLayout;