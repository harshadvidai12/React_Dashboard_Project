const radialChart = {
    series: [95, 70, 30, 35],
    options: {
        chart: {
            type: 'radialBar',
            height: 350,
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '30%', 
                },
                track: {
                    background: '#fff', 
                    strokeWidth: '100%', 
                },
            },
        },
        labels: [' Frozen Donor', 'Fresh Donor',' Frozen Self','Fresh Self'], 
        fill: {
            colors: ['#37C577', '#3768C5', '#EC9D3E', '#C5B037'], 
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
    },
};

export default radialChart;