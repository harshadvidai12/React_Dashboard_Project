// HorizontalBrChart.js
import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { Tabs } from 'antd';
import { horizontalBrChart } from './configs/horizontalBrChart'

function HorizontalBrChart() {
    const { Title } = Typography;
    const [selectedTab, setSelectedTab] = useState('Count');

    const handleTabChange = (key) => {
        setSelectedTab(key);
    };

    return (
        <>
            <div id="chart">
                <div className="chart-container">
                    <div style={{display:'flex'}}>
                        <div style={{ width: '30%' }}>
                            <Title level={5} className="header-name">Source</Title>
                        </div>
                        <div style={{ width: '70%' }}>
                            <Tabs defaultActiveKey="Count" items={[
                                {
                                    key: 'Count',
                                    label: 'Count',
                                },
                                {
                                    key: 'Day',
                                    label: 'Day',
                                },
                                {
                                    key: 'Age',
                                    label: 'Age',
                                },
                                {
                                    key: 'Source',
                                    label: 'Source',
                                },
                                {
                                    key: 'Fertilization',
                                    label: 'Fertilization',
                                },
                                {
                                    key: 'Protocol',
                                    label: 'Protocol',
                                },
                            ]} onChange={handleTabChange} />
                        </div>
                    </div>
                    <div className="maindiv2">
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#F1EBFF' }}>
                            </span>
                            5AA
                        </div>
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#E4D7FF' }}>
                            </span>
                            5AB
                        </div>
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#C7B2F2' }}>
                            </span>
                            5BB
                        </div>
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#9E7FE1' }}>
                            </span>
                            4AA
                        </div>
                        <div className="innerdiv">
                            <span className="spanmain" style={{ backgroundColor: '#7C67A8' }}>
                            </span>
                            4AB
                        </div>
                    </div>
                </div>
                <ReactApexChart
                    className="bar-chart"
                    options={{
                        chart: {
                            type: 'bar',
                            width: "100%",
                            height: "auto",
                            stacked: true,
                            toolbar: {
                                show: false,
                            },
                        },
                        plotOptions: {
                            bar: {
                                horizontal: true,
                                columnWidth: "30%",
                                borderRadius: 10,
                                borderRadiusApplication: "end",
                                barHeight: "70%",
                            },
                        },
                        stroke: {
                            show: true,
                            width: 2,
                            colors: ["#fff"],
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        grid: {
                            show: false,
                            borderColor: "#ccc",
                            strokeDashArray: 2,
                        },
                        xaxis: {
                            ...horizontalBrChart[selectedTab].options.xaxis,
                            labels: {
                                show: false,
                            },
                            axisBorder: {
                                show: true,
                            },
                            axisTicks: {
                                show: true,
                            },
                        },
                        yaxis: {
                            labels: {
                                show: true,
                                align: "right",
                                minWidth: 0,
                                maxWidth: 160,
                                style: {
                                    colors: ["#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157"],
                                },
                            },
                            axisBorder: {
                                show: true,
                                color: "#f2f2f3",
                            },
                        },
                        tooltip: {
                            y: {
                                formatter: function (val) {
                                    return "$ " + val + " thousands";
                                },
                            },
                        },
                        states: {
                            hover: {
                                filter: {
                                    type: "none", // Disable any hover filter effect
                                },
                            },
                        },
                        legend: {
                            show: false, // Hide the legend
                        },
                    }}
                    series={horizontalBrChart[selectedTab].series}
                    height={330}
                    type="bar"
                />
            </div>
        </>
    );
}

export default HorizontalBrChart;