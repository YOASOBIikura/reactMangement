import {Card, Col, Row, Table} from "antd";
import "./Main.sass"
import {countData, echartData, tableColumns, tableData, userData, videoData} from "../../axios/data";
import React from "react";
import * as Icon from "@ant-design/icons";
import MyEcharts from "../../component/Echarts"

const Main = ()=>{
    const userImg = require("../../assets/images/head.png")
    const iconToElement = (icon) => React.createElement(Icon[icon])

    let lineData = {}
    let series = []
    let keys = Object.keys(echartData.xdata[0])
    keys.forEach(item => {
        series.push({
            name: item,
            type: "line",
            data: echartData.xdata.map(xd => xd[item])
        })
    })
    lineData = {
        xData: echartData.date,
        series: series
    }

    let userBar = {
        xData: userData.map(item => item.date),
        series: [
            {
                name: '新增用户',
                data: userData.map(item => item.new),
                type: 'bar'
            },
            {
                name: '活跃用户',
                data: userData.map(item => item.active),
                type: 'bar'
            }
        ]
    }

    let videoBar = {
        series: [
            {
                data: videoData,
                type: 'pie'
            }
        ]
    }

    return <>
        <Row className="home_main">
            <Col span={8}>
                <Card hoverable className="mainCard">
                    <div className="user">
                        <img src={userImg} alt="img"/>
                        <div className="userinfo">
                            <p>Admin</p>
                            <p>超级管理员</p>
                        </div>
                    </div>
                    <div className="loginInfo">
                        <p>上次登录时间:<span>2025-08-09</span></p>
                        <p>上次登录地点:<span>成都</span></p>
                    </div>
                </Card>
                <Card hoverable className="mainCard">
                    <Table columns={tableColumns} dataSource={tableData} pagination={false}></Table>
                </Card>
            </Col>
            <Col span={16}>
                <div className="saleNum">
                    {
                        countData.map((item, index)=>{
                          return (
                              <Card key={index} >
                                  <div className="saleIcon" style={{backgroundColor: item.color}}>
                                      {iconToElement(item.icon)}
                                  </div>
                                  <div className="saleDetail">
                                      <p>$ {item.value}</p>
                                      <p>{item.name}</p>
                                  </div>
                              </Card>
                          )
                        })
                    }
                </div>
                <MyEcharts style={{height: "280px", width: "90%"}} chartData={lineData}/>
                <div className="bottomGraph">
                    <MyEcharts style={{height: "240px", width: "50%"}} chartData={userBar}/>
                    <MyEcharts style={{height: "240px", width: "50%"}} chartData={videoBar} isAxisChart={false}/>

                </div>
            </Col>
        </Row>
    </>
}

export default Main