import ReactApexChart from "react-apexcharts";
import eChart from "./configs/eChart";
import { Typography } from "antd";

function EChart() {
  const { Title } = Typography;

  return (
    <>
      <div id="chart">
        <div>
          <Title level={5} className="header-name">Age Distribution</Title>
        </div>
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          height={425}
          type="bar"
        />
      </div>
    </>
  );
}

export default EChart;