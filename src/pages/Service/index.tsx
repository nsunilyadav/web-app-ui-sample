import React from "react";
import AppRoutes from "@constants/AppRoutes";
import Services from "@pages/Home/Services";
import service from "@assets/images/services-1.jpg";
import { Container, Figure, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.less";

const Service = () => {
  return (
    <div>
      <section className="page-title tophead-image">
        <Container>
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>Services</h1>
            </div>
            <div className="bread-crumb">
              <ul>
                <li><Link to={AppRoutes.HOME_PAGE}>Home</Link></li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className="services-section style-four">
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image-box">
                      <Figure.Image src={service} />
                    </Figure>
                    <div className="overlay-box"><Link to='/'>Read More</Link></div>
                  </div>
                  <div className="lower-content">
                    <h3><Link to='/'>Development</Link></h3>
                    <div className="text">Acepteur sintas haecate sed ipsums cupidates nondui proident sunlt culpa qui tempore officia sed ipsum tempor eserunt.</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image-box">
                      <Figure.Image src={service} />
                    </Figure>
                    <div className="overlay-box"><Link to='/'>Read More</Link></div>
                  </div>
                  <div className="lower-content">
                    <h3><Link to='/'>Testing</Link></h3>
                    <div className="text">Acepteur sintas haecate sed ipsums cupidates nondui proident sunlt culpa qui tempore officia sed ipsum tempor eserunt.</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image-box">
                      <Figure.Image src={service} />
                    </Figure>
                    <div className="overlay-box"><Link to='/'>Read More</Link></div>
                  </div>
                  <div className="lower-content">
                    <h3><Link to='/'>Web Testing</Link></h3>
                    <div className="text">Acepteur sintas haecate sed ipsums cupidates nondui proident sunlt culpa qui tempore officia sed ipsum tempor eserunt.</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
    </div>
  );
};

export default Service;
