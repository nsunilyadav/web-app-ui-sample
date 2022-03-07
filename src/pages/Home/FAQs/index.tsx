import { Col, Container, ProgressBar, Row, Accordion } from "react-bootstrap";
import "./styles.less";

const Faqs = () => {
  return (
    <section className="faq-skill-section">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} className="accordion-column">

            <div className="sec-title left">
              <h2>Some FAQ’s</h2>
              <div className="separater"></div>
            </div>
            <Accordion defaultActiveKey="0" className="accordion-box">
              <Accordion.Item eventKey="0" className="accordion block">
                <Accordion.Header  className="acc-btn">
                    Look at your customers’ questions ?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore .
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="accordion block">
                <Accordion.Header  className="acc-btn">
                    Look at your customers’ questions ?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore .
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="accordion block">
                <Accordion.Header  className="acc-btn">
                    Look at your customers’ questions ?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore .
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="accordion block">
                <Accordion.Header  className="acc-btn">
                    Look at your customers’ questions ?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore .
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={6} md={12} sm={12} className="accordion-column">
            <div className="sec-title left">
              <h2>Our Statistics Skill Rate</h2>
              <div className="separater"></div>
            </div>
            <div className="text">
              This product is meant for educational purposes only. Resemblance
              to real people, living or dead is coincidental.
            </div>
            <div className="inner-box">
              <div className="progress-levels">
                <div className="progress-box">
                  <div className="box-title">
                    Look at your customers’ questions
                  </div>
                  <ProgressBar now={65} />
                </div>
                <div className="progress-box">
                  <div className="box-title">Economic Growth</div>
                  <ProgressBar now={90} />
                </div>
                <div className="progress-box">
                  <div className="box-title">Achieves Goals</div>
                  <ProgressBar now={80} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
