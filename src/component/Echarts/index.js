import {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {options} from "axios";

const axisOption = {
    // 图例颜色
    textStyle: {
        color: "#333"
    },
    // 提示框
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: "category", //类目轴
        data: [],
        axisLine: {
            lineStyle: {
                color: "#17b3a3"
            },
        },
        axisLabel: {
            interval: 0,
            color: "#333"
        },
    },
    yAxis: [
        {
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#17b3a3"
                }
            },
        },
    ],
    color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3", "#e5cf0d", "#97b552", "#95706d", "#dc69aa", "#07a2a4", "#9a7fd1", "#588dd5"],
    series: [],
}

const normalOption = {
    tooltip: {
        trigger: 'item',
    },
    color: ["#0f78f4", "#dd536b", "#9467bd", "#a6a6a6", "#e1bb22", "#39c362", "#3ed1cf"],
    series: [],
}

const Echarts = ({style, chartData, isAxisChart = true}) => {
    let options
    const echartsRef = useRef()
    let echartObj = useRef(null)
    useEffect(() => {
        // echarts初始化
        echartObj = echarts.init(echartsRef.current)
        // 设置Option
        if(isAxisChart){
            // 设置X轴
            axisOption.xAxis.data = chartData.xData
            axisOption.series = chartData.series
            options = axisOption
        }else {
            normalOption.series = chartData.series
            options = normalOption
        }
        echartObj.setOption(options)
    }, [chartData]);
    return (
        <div style={style} ref={echartsRef}></div>
    )
}

export default Echarts