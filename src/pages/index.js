import React from 'react'
import CommonLayout from '../layout'
import { data1 } from '../utils/data'
import FirstCard from '../components/FirstCard'
import { Avatar, Card, Col, Progress, Rate, Row } from 'antd'
import GraphCard from '../components/GraphCard'
import RecentOrders from '../components/RecentOrders'
import { FaCaretUp } from 'react-icons/fa'
import { GoGoal } from 'react-icons/go'
import { RxCaretRight } from 'react-icons/rx'
import { PiCookingPot, PiHamburgerBold } from 'react-icons/pi'

const Home = () => {

    return (
        <Row gutter={[24, 24]}>
            <Col md={16} span={24}>
                <Row gutter={[12, 12]}>
                    {
                        data1.map((object, i) => {
                            return <Col md={6} sm={12} key={i} span={24}><FirstCard content={object} /></Col>
                        })
                    }
                </Row>
                <div style={{ marginTop: 12 }}>
                    <GraphCard />
                </div>
                <div style={{ marginTop: 12 }}>
                    <RecentOrders />
                </div>
            </Col>
            <Col md={8} span={24}>
                <Card style={{ background: '#202028', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} styles={{ body: { padding: '10px' } }}>
                    <Row>
                        <Col sm={14} span={24}>
                            <h5 style={{ margin: 0, color: '#fff' }}>Net Profit</h5>
                            <h1 style={{ margin: 0, color: '#fff' }}>$ 6759.25</h1>
                            <p style={{ margin: 0, color: 'green' }}><FaCaretUp />  3%</p>
                        </Col>
                        <Col sm={10} span={24}>
                            <Progress type="circle" percent={70} trailColor="rgb(108, 103, 195)" size={107} strokeColor="rgb(136, 132, 216)" strokeWidth={10} />

                        </Col>
                    </Row>
                </Card>
                <div style={{ marginTop: '12px' }}>
                    <Card style={{ background: '#202028', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} styles={{ body: { padding: '10px' } }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <Avatar style={{ background: 'rgb(92, 49, 57)' }} size="large" icon={<GoGoal size={16} color="rgb(243, 94, 93)" />} />
                                <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>&nbsp;&nbsp;Goals</span>
                            </div>
                            <div>
                                <Avatar style={{ background: '#45464b' }} size="small" icon={<RxCaretRight />} />

                            </div>
                        </div>
                        <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <Avatar style={{ background: 'rgb(41, 51, 104)' }} size="large" icon={<PiHamburgerBold size={16} color="rgb(64, 99, 253)" />} />
                                <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>&nbsp;&nbsp;Popular Dishes</span>
                            </div>
                            <div>
                                <Avatar style={{ background: '#45464b' }} size="small" icon={<RxCaretRight />} />

                            </div>
                        </div>
                        <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <Avatar style={{ background: 'rgb(93, 42, 76)' }} size="large" icon={<PiCookingPot size={16} color="rgb(223, 64, 160)" />} />
                                <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>&nbsp;&nbsp;Menus</span>
                            </div>
                            <div>
                                <Avatar style={{ background: '#45464b' }} size="small" icon={<RxCaretRight />} />

                            </div>
                        </div>
                    </Card>

                </div>
                <div style={{ marginTop: '12px' }}>
                    <Card style={{ background: '#202028', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} styles={{ body: { padding: '10px' } }}>
                        <h3 style={{ color: '#fff' }}>Customer's Feedback</h3>
                        <div>
                            <div>
                                <Avatar
                                    style={{ background: "#45464b" }}
                                    size="large"
                                    src={"https://api.dicebear.com/7.x/miniavs/svg?seed=5"}
                                />{"  "}
                                <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}> Jenny Wilson</span>
                            </div>
                            <div style={{ marginTop: 5 }}>
                                <Rate defaultValue={3} disabled />
                            </div>
                            <div style={{ marginTop: 5 }}>
                                <p style={{ color: '#fff', fontSize: '0.75rem', margin: 0 }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                            </div>
                        </div>
                        <div style={{marginTop:'10px'}}>
                            <div>
                                <Avatar
                                    style={{ background: "#45464b" }}
                                    size="large"
                                    src={"https://api.dicebear.com/7.x/miniavs/svg?seed=4"}
                                />{"  "}
                                <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}> Dianne Russel</span>
                            </div>
                            <div style={{ marginTop: 5 }}>
                                <Rate defaultValue={5} disabled />
                            </div>
                            <div style={{ marginTop: 5 }}>
                                <p style={{ color: '#fff', fontSize: '0.75rem', margin: 0 }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </Col>
        </Row>
    )
}

export default Home
