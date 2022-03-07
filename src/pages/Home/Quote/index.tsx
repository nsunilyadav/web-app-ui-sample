import AppRoutes from "@constants/AppRoutes";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.less";

const Quote = () => {
  return (
    <section className="quote-section">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="inner-column">
              <h3>Provide Solutions For the Realiable Growth</h3>
              <Link to={AppRoutes.CONTACT} className="get-quote-btn btn-style-six"> Get A Quotes </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Quote;
