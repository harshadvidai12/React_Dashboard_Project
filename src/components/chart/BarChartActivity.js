import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import React, { useState } from 'react';
import { DATA} from '../constant/barChartActivityConst';
import {barChartActivity } from './configs/barChartActivity'
function BarChartActivity() {
  const { Title } = Typography;
  const [selectedOption, setSelectedOption] = useState('Week');
  const [activeButton, setActiveButton] = useState('patients');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const chartData = DATA[selectedOption][activeButton === "patients" ? 'Total Patients' : 'Total Embryo Graded'];

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
          options={barChartActivity}
          series={chartData.series}
          height={436}
          type="bar"
        />
      </div>
    </>
  );
}

export default BarChartActivity;