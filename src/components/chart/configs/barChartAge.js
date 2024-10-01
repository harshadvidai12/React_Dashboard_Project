const barChartAge = {
    series: [
        {
            name: "Total Patients",
            data: [450, 200, 100, 220, 500, 100, 220, 500, 100, 220, 500, 100],
            color: "#F7F3FF",
        },
        {
            name: "Total Embryo Graded",
            data: [200, 100, 220, 500, 100, 220, 500, 100, 220, 500, 100, 220],
            color: "#F7F3FF",
        },
    ],
    options: {
        xaxis: {
            categories: ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"],
        },
    },
};

export default barChartAge;