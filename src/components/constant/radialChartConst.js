import radialChart from "../../components/chart/configs/radialChart.js"; 

export  const RadialData={
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
  };