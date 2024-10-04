import ReactApexChart from "react-apexcharts";
import BarChartAgeDistList from "./configs/BarChartAgeDistList";
import { Typography } from "antd";

function BarChartAgeDist() {
  const { Title } = Typography;

  return (
    <>
      <div id="chart">
        <div>
          <Title level={4} className="header-name">Age Distribution</Title>
        </div>
        <ReactApexChart
          className="bar-chart"
          options={BarChartAgeDistList.options}
          series={BarChartAgeDistList.series}
          height={425}
          type="bar"
        />
      </div>
    </>
  );
}

export default BarChartAgeDist;