import { Col, Container, Row } from "react-bootstrap";
import "./styles.less";

const Services = () => {
  return (
    <section className="services-section-box">
      <Container>
        <div className="sec-title centered">
          <h2>Our Services</h2>
          <div className="separater"></div>
        </div>
        <Row className="services-box clearfix">
          <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-block">
              <div className="inner-box">
                <div className="lower-content">
                <i className="fas fa-tasks"></i>
                  <h3>
                    Software Consulting
                  </h3>
                  <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-block">
              <div className="inner-box">
                <div className="lower-content">
                <i className="fas fa-paint-brush"></i>
                  <h3>
                    Web Design
                  </h3>
                  <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-block">
              <div className="inner-box">
                <div className="lower-content">
                <i className="fas fa-code"></i>
                  <h3>
                    Software Development
                  </h3>
                  <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-block">
              <div className="inner-box">
                <div className="lower-content">
                <i className="fas fa-mobile-alt"></i>
                  <h3>
                    Mobile development
                  </h3>
                  <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-block">
              <div className="inner-box">
                <div className="lower-content">
                <i className="fas fa-terminal"></i>
                  <h3>
                    Web App Development
                  </h3>
                  <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-block">
              <div className="inner-box">
                <div className="lower-content">
                <i className="far fa-clone"></i>
                  <h3>
                    CMS Development
                  </h3>
                  <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
