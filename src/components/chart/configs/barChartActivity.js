export const barChartActivity = {
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
      labels: {
        show: true,
      },
    },
    yaxis: {
      labels: {
        show: false,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: ["#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157", "#4A5157"],
        },
      },
      axisBorder: {
        show: true,
        color: '#f2f2f3',
      },
    },
    tooltip: {
      y: {
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
  };
  