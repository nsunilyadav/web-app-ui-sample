import AppRoutes from "@constants/AppRoutes";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.less";

const ServicesBanner = () => {
  return (
    <section className="paralex-section services-image">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="inner-column text-center">
              <h2>
                Lorem Ipsum <br /> simply dummy text of the printing{" "}
              </h2>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br /> Ut enim ad minim veniam, quis nostrud exercitation
              </div>
              <Link to={AppRoutes.SERVICES} className="theme-btn btn-style-one"> Our Services </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesBanner;
