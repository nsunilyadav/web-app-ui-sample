import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./styles.less";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <Container>
        <Row>
          <Col lg={8} md={12} sm={12} className="form-column">
            <div className="sec-title left">
              <h2>Contact Us</h2>
              <div className="separater"></div>
            </div>
            <div className="inner-column">
              <div className="contact-form">
                <Form>
                  <Row>
                    <Col lg={6} md={12} className="form-group">
                      <Form.Control
                        type="text"
                        name="username"
                        placeholder="Name"
                        required
                      />
                    </Col>
                    <Col lg={6} md={12} className="form-group">
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required
                      />
                    </Col>
                    <Col lg={6} md={12} className="form-group">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                      />
                    </Col>
                    <Col lg={6} md={12} className="form-group">
                      <Form.Control
                        type="text"
                        name="company"
                        placeholder="Company"
                        required
                      />
                    </Col>
                    <Col lg={12} md={12} className="form-group">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        placeholder="Massage"
                      />
                    </Col>
                    <Col lg={12} md={12} className="form-group">
                      <Button
                        className="theme-btn btn-style-one"
                        type="submit"
                        name="submit-form"
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} className="info-column">
            <div className="sec-title left">
              <h2>Need Quick Query?</h2>
              <div className="separater"></div>
            </div>
            <div className="inner-column">
              <ul className="contact-info">
                <li>
                  {" "}
                  <i className="far fa-envelope"></i> <span>Email:</span>{" "}
                  <br /> Email@example.com
                </li>
                <li>
                  {" "}
                  <i className="fas fa-phone-volume"></i>{" "}
                  <span>Call Us:</span> <br /> (+91) 1234 5678 9012
                </li>
                <li>
                <i className="far fa-clock"></i>{" "}
                  <span>Time Office:</span> <br /> Monday to Friday 9:00am -
                  6:00pm
                </li>
                <li>
                <i className="fas fa-map-marker-alt"></i>{" "}
                  <span>Address Office:</span> <br /> Global Street 2002 Newtark
                  United State
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
