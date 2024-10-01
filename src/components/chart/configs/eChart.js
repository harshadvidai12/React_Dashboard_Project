const eChart = {
  series: [
    {
      name: "Sales",
      data: [50, 20, 40, 80, 70, 60],
      color: "#F7F3FF",
    },
  ],

  options: {
    chart: {
      type: "bar",
      width: "100%",
      height: "auto",

      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 10,               
        borderRadiusApplication: "end", 
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
      strokeDashArray: 2,
    },
    xaxis: {
      categories: ["<30", "30-34", "35-37", "38-40", "41-42","43-46"],
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: ["#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157"],
        },
      },
      axisBorder: {
        show: true,
        color: '#f2f2f3',
      },
      axisTicks: {
        show: true,
      },
      title: {
        text: "SART Age",
        style: {
          fontSize: "12px",
          fontWeight: "400",
          color: "#9E9E9E",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: ["#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157"],
        },
        formatter: function (val) {
          return val + "k";
        },
      },
      axisBorder: {
        show: true,
        color: '#f2f2f3',
      },
      axisTicks: {
        show: true,
      },
      title: {
        text: "Patients",
        style: {
          fontSize: "12px",
          fontWeight: "400",
          color: "#9E9E9E",
        },
      },
      tickAmount: 10,
      min: 0,
      max: 100,
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return val + "k";
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
  },
};

export default eChart;