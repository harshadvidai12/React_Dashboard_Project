import { Typography } from "antd";
import { Tabs } from 'antd';
import  "./ProgressChart.css"
import React, { useState } from 'react';

function ProgressChart() {
    const { Title } = Typography;
    const [activeTab, setActiveTab] = useState('1');
    const [data, setData] = useState({
        '1': {
            progressBar1: { width: '40%', backgroundColor: '#3768C5' },
            progressBar2: { width: '60%', backgroundColor: '#37C577' },
            labels: ['40%', '60%'],
            textOverview: [
                { text: 'intracytoplasmic sperm injectio', borderLeftColor: '#3768C5' },
                { text: 'In-Vitro Fertilization', borderLeftColor: '#37C577' },
            ],
        },
        '2': {
            progressBar1: { width: '50%', backgroundColor: '#d0021b' }, 
            progressBar2: { width: '50%', backgroundColor: '#9013fe' }, 
            labels: ['50%', '50%'],
            textOverview: [
                { text: 'Fresh Cycle', borderLeftColor: '#d0021b' },
                { text: 'Frozen Cycle', borderLeftColor: '#9013fe' },
            ],
        },
        '3': {
            progressBar1: { width: '40%', backgroundColor: '#f5a623' }, 
            progressBar2: { width: '60%', backgroundColor: '#50e3c2' },
            labels: ['40%', '60%'],
            textOverview: [
                { text: 'Male Factor', borderLeftColor: '#f5a623' },
                { text: 'Female Factor', borderLeftColor: '#50e3c2' },
            ],
        },
    });

    const onChange = (key) => {
        setActiveTab(key);
    };

    const items = [
        {
            key: '1',
            label: 'Fertilization',
        },
        {
            key: '2',
            label: 'Protocol',
        },
        {
            key: '3',
            label: 'Diagnosis',
        },
    ];

    return (
        <>
            <div className="chart-container">
                <div>
                    <Title level={4} className="header-name">Overview</Title>
                </div>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                <div className="container px-2">
                    <div className="progress-bar" style={data[activeTab].progressBar1} />
                    <div className="progress-bar" style={data[activeTab].progressBar2} />
                </div>
                <div className="container  px-2">
                    <div className="" style={{ width: data[activeTab].labels[0], marginRight: '5px' }}>
                        <span className="label">{data[activeTab].labels[0]}</span>
                    </div>
                    <div className="" style={{ width: data[activeTab].labels[1], marginRight: '5px' }}>
                        <span className="label">{data[activeTab].labels[1]}</span>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '95%', display: 'grid', justifyItems: 'center', alignItems: 'center' ,borderRadius: '12px', height:'108px', backgroundColor:'#FAF8FF', marginTop:'1rem' }}>
                        {data[activeTab].textOverview.map((item, index) => (
                            <span key={index} className="text-overview" style={{borderLeft:`5px solid ${item.borderLeftColor}`}}>{item.text}</span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProgressChart;