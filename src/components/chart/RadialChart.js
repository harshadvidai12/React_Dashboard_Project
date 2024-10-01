import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { Tabs } from 'antd';
import React, { useState } from 'react';
import radialChart from "./configs/radialChart"; // Import radialChart instead of lineChart

function RedialChart() {
    const { Title } = Typography;
    const [activeTab, setActiveTab] = useState('1');
    const [data, setData] = useState({
        '1': {
            series: radialChart.series,
            options: radialChart.options,
        },
        '2': {
            series: [80, 60, 40, 20],
            options: {
                labels: ['Fresh Self', 'Frozen Self', 'Fresh Donor', 'Frozen Donor'], 
                fill: {
                    colors: ['rgb(55, 197, 119)', 'rgb(55, 104, 197)', 'rgb(236, 157, 62)', 'rgb(197, 176, 55)'], 
                },
            },
        },
        '3': {
            series: [90, 80, 70, 60],
            options: {
                labels: ['Fresh Self', 'Frozen Self', 'Fresh Donor', 'Frozen Donor'], 
                fill: {
                    colors: ['rgb(55, 197, 119)', 'rgb(55, 104, 197)', 'rgb(236, 157, 62)', 'rgb(197, 176, 55)'], 
                },
            },
        },
    });

    const onChange = (key) => {
        setActiveTab(key);
    };

    const items = [
        {
            key: '1',
            label: 'Egg',
        },
        {
            key: '2',
            label: 'Sperm',
        },
        {
            key: '3',
            label: 'Both    ',
        },
    ];

    return (
        <>
            <div className="chart-container">
                <div>
                    <Title level={5} className="header-name">Source</Title>
                </div>

                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                <div className="maindiv">
                    <div className="innerdiv">
                        <span className="spanmain" style={{backgroundColor:'rgb(55, 197, 119)'}}>
                        </span>
                        Fresh Self
                    </div>
                    <div className="innerdiv">
                        <span className="spanmain" style={{backgroundColor:'rgb(55, 104, 197)'}}>
                        </span>
                        Frozen Self
                    </div>
                    <div className="innerdiv">
                        <span className="spanmain" style={{backgroundColor:'rgb(236, 157, 62)'}}>
                        </span>
                        Fresh Donor
                    </div>
                    <div className="innerdiv">
                        <span className="spanmain" style={{backgroundColor:'rgb(197, 176, 55)'}}>
                        </span>
                        Frozen Donor
                    </div>
                </div>
            </div>


            <ReactApexChart
            className="full-width"
            options={{
                chart: {
                    type: 'radialBar',
                    height: 350,
                },
                plotOptions: {
                    radialBar: {
                        track: {
                            background: '#fff', 
                            strokeWidth: '100%', 
                        },
                    },
                    radialBar: {
                        offsetY: 10,
                        startAngle: 0,
                        endAngle: 360,
                        hollow: {
                          margin: 5,
                          background: '#f0f0f0',
                         
                        },
                    },
                },
                stroke: {
                    lineCap: 'round'
                  },
                legend: {
                    show: false,
                    position: 'top', 
                },
                
                tooltip: {
                    enabled: true, 
                    fillSeriesColor: false, 
                    style: {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                    },
                    y: {
                        formatter: function(val) {
                            return val ;
                        },
                    },
                },
                labels: data[activeTab].options.labels,
                fill: data[activeTab].options.fill,
            }}
            series={data[activeTab].series}   
            type="radialBar"              
            height={350}
            width={"100%"}
        />
        </>
    );
}

export default RedialChart;