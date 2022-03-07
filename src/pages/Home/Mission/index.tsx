import OurMission from "@assets/images/ourmission.jpg";
import OurVision from "@assets/images/vision.jpg";
import AppRoutes from "@constants/AppRoutes";
import { Col, Container, Row } from "react-bootstrap";
import MissionCard from "./MIssionCard";
import "./styles.less";

const Mission = () => {
  return (
    <section className="our-mission-section">
      <Container>
        <Row>
          <Col xl={6} lg={12} md={12} sm={12}>
            <div className="inner-box">
              <div className="sec-title left">
                <h2>We Are 20 Years Experience in Financial and Business</h2>
                <div className="separater"></div>
              </div>
              <div className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </div>
              <div className="clearfix fun-fact-section">
                <div className="fact-counter">
                  <Row>
                    <Col lg={6} md={6} sm={12} className="counter-column">
                      <div className="count-box">
                        <div className="count"><span className="count-text">100</span></div>
                        <div className="separater" />
                        <h4 className="counter-title">Project Successfull</h4>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="counter-column">
                      <div className="count-box">
                        <div className="count"><span className="count-text">100</span></div>
                        <div className="separater" />
                        <h4 className="counter-title">satisfied clients</h4>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} className="m-auto">
            <MissionCard
              image={OurMission}
              title="Our Mission"
              description={
                "Lorem Ipsum is simply dummy text of the printing and ˀtypesetting industry. Lorem Ipsum has been ..."
              }
              link={AppRoutes.HOME_PAGE}
            />
            <MissionCard
              image={OurVision}
              title="Our Vision"
              description={
                "Lorem Ipsum is simply dummy text of the printing and ˀtypesetting industry. Lorem Ipsum has been ..."
              }
              link={AppRoutes.HOME_PAGE}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mission;
