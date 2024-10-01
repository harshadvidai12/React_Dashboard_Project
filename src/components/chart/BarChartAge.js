import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import React, { useState } from 'react';
import barChartAge from "./configs/barChartAge";

function BarChartAge() {
    const { Title } = Typography;
    const [selectedOption, setSelectedOption] = useState('Week');
    const [activeButton, setActiveButton] = useState('patients');
    const [data, setData] = useState({
        'Week': {
            'Total Patients': {
                series: [
                    {
                        name: "Total Patients",
                        data: [70, 20, 50, 60, 50, 40, 70],
                        color: "#F7F3FF",
                    },
                ],
                options: {
                    xaxis: {
                        categories: ["Mon","Thes", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    },
                },
            },
            'Total Embryo Graded': {
                series: [
                    {
                        name: "Total Embryo Graded",
                        data:[ 20, 50,70, 60,50, 70,80],
                        color: "#F7F3FF",
                    },
                ],
                options: {
                    xaxis: {
                        categories: ["Mon","Thes", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    },
                },
            },
        },
        'Day': {
            'Total Patients': {
                series: [
                    {
                        name: "Total Patients",
                        data: [10, 50, 70, 20,60, 50, 40],
                        color: "#F7F3FF",
                    },
                ],
                options: {
                    xaxis: {
                        categories: ["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    },
                },
            },
            'Total Embryo Graded': {
                series: [
                    {
                        name: "Total Embryo Graded",
                        data: [ 50, 60,70, 20, 50, 60, 70],
                        color: "#F7F3FF",
                    },
                ],
                options: {
                    xaxis: {
                        categories: ["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    },
                },
            },
        },
    });

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <span className="activitytext">Activity</span>
                </div>
                <div>
                    <select value={selectedOption} onChange={handleOptionChange} className="weektext">
                        <option value="Week">Week</option>
                        <option value="Day">Day</option>
                    </select>
                </div>
            </div>
            <div className="stackedbtn">
                <button
                    className={`stacked-button ${activeButton === "patients" ? "active" : ""}`}
                    onClick={() => handleButtonClick("patients")}
                >
                    <span className="button-icon">Total Patients</span>
                </button>

                <button
                    className={`stacked-button ${activeButton === "embryo" ? "active" : ""}`}
                    onClick={() => handleButtonClick("embryo")}
                >
                    <span className="button-icon">Total Embryo Graded</span>
                </button>
            </div>
            <div id="chart">
                <ReactApexChart
                    className="bar-chart"
                    options={{
                        chart: {
                            type: 'bar',
                            width: "100%",
                            height: "auto",

                            toolbar: {
                                show: false,
                            },
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: "40%",
                                borderRadius: 10,               // Border radius applied
                                borderRadiusApplication: "end", // Applies the radius only at the top
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            show: true,
                            width: 1,
                            colors: ["transparent"],
                        },
                        grid: {
                            show: false,
                            borderColor: "#ccc",
                            strokeDashArray:  2 ,
                        },
                        xaxis: {
                            categories: data[selectedOption][activeButton === "patients" ? 'Total Patients' : 'Total Embryo Graded'].options.xaxis.categories,
                            labels:{
                              show: true,
                            }
                        },
                        yaxis: {
                            labels: {
                                show: false,
                                align: "right",
                                minWidth: 0,
                                maxWidth: 160,
                                style: {
                                    colors: ["#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "# 4A5157","#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157"],
                                },
                            },
                            axisBorder: {
                                show: true,
                                color: '#f2f2f3',
                            },
                        },
                        tooltip: {
                            y : {
                                formatter: function (val) {
                                    return "$ " + val + " K";
                                },
                            },
                        },
                        states: {
                            hover: {
                                filter: {
                                    type: "none", 
                                },
                            },
                        },
                    }}
                    series={data[selectedOption][activeButton === "patients" ? 'Total Patients' : 'Total Embryo Graded'].series}
                    height={450}
                    type="bar"
                />
            </div>
        </>
    );
}

export default BarChartAge;