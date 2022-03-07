import { Col, Container, Row } from "react-bootstrap";
import "./styles.less";

const Features = () => {
  return (
    <section className="feautred-section">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="sec-title left">
              <h2>
                How We Make Work <br /> Successful Business in 4 Steps
              </h2>
              <div className="separater"></div>
            </div>
          </Col>
        </Row>
        <Row className="featured-box clearfix">
          <Col lg={3} md={6} sm={12}>
            <div className="inner-box">
              <div className="title-box">
                <h4>
                  <span className="numbe-post">1</span>Analize
                </h4>
              </div>
              <div className="lower-content">
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="inner-box">
              <div className="title-box">
                <h4>
                  <span className="numbe-post">2</span>Advise
                </h4>
              </div>
              <div className="lower-content">
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="inner-box">
              <div className="title-box">
                <h4>
                  <span className="numbe-post">3</span>Strategy
                </h4>
              </div>
              <div className="lower-content">
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="inner-box">
              <div className="title-box">
                <h4>
                  <span className="numbe-post">4</span>Result
                </h4>
              </div>
              <div className="lower-content">
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
