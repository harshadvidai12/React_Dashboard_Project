// src/components/Home.js
import { Card, Col, Row, Typography } from "antd";
import { ConstDashboardCards } from "../components/constant/ConstDashboardCards";
import BarChartAge from "../components/chart/BarChartActivity";
import BarChartAgeDist from "../components/chart/BarChartAgeDist";
import ProgressChart from "../components/chart/ProgressChart";
import RadialChart from '../components/chart/RadialChart';
import HorizontalBrChart from '../components/chart/HorizontalBrChart';
import HomeCss from '../assets/styles/Home.module.css'
const { Title } = Typography;

// Header Cards 
const CountCard = ({ data }) => (
  <Col xs={24} sm={24} md={12} lg={6} xl={6} className="mb-24">
    <Card bordered={false} className="criclebox">
      <div className="number">
        <Row align="middle" gutter={[24, 0]}>
          <Col xs={5}>
            <div className="icon-box">
              <img src={data.icon} alt={data.today} />
            </div>
          </Col>
          <Col xs={18} className={HomeCss.text}>
            <Title level={3}>
              {data.title} <small className={data.bnb}></small>
            </Title>
            <span >{data.today}</span>
          </Col>
        </Row>
      </div>
    </Card>
  </Col>
);

// Dashboards  
function Home() {
  return (
    <div className={HomeCss.layoutcontent}>
      {/* cards */}
      <Row className="rowgap-vbox" gutter={[24, 0]}>
        {ConstDashboardCards.map((data, index) => (
          
          <CountCard key={index} data={data} />
        ))}
      </Row>
      {/* Charts  */}
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={24} lg={7} xl={7} className="mb-24">
          <Card bordered={false} className="criclebox">
            <ProgressChart />
          </Card>
          <Card bordered={false} className="criclebox" style={{ marginTop: 12 }}>
            <BarChartAge />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={17} xl={17} className="mb-24">
          <div className="d-flex w-100">
            <Card
              bordered={false}
              className="criclebox cardbody h-full"
              style={{ width: '50%', marginRight: 12, paddingLeft: 12, height: 500 }}
            >
              <BarChartAgeDist />
            </Card>
            <Card
              bordered={false}
              className="criclebox cardbody h-full"
              style={{ width: '50%', height: 500 }}
            >
              <RadialChart />
            </Card>
          </div>
          <Card bordered={false} className="criclebox" style={{ marginTop: 12 }}>
            <HorizontalBrChart />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Home;
