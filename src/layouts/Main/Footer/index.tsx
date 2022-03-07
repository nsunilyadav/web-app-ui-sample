
// import React from "react";
import AppRoutes from "@constants/AppRoutes";
import { Col, Container, Row, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.less";

import blog1 from "@assets/images/blog-10.jpg";
import blog2 from "@assets/images/blog-11.jpg";
import Logo from "@assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="main-footer style-two footer-image">
      <Container>
        <div className="widgets-section">
          <Row className="clearfix">
            <Col xl={8} lg={12} md={12} sm={12} className="big-column">
              <Row>
                <Col lg={5} md={12} sm={12} className="footer-column">
                  <div className="footer-widget about-widget">
                    <div className="footer-logo">
                      <Figure className="imageBox">
                        <Figure.Image src={Logo} />
                      </Figure>
                    </div>
                    <div className="widget-content">
                      <ul className="info-box">
                        <li>
                          <i className="far fa-map"></i>Plot No. 47, Second Floor, G S Plaza, Scheme No 78 - III, Part II,
                          Vijay Nagar, Indore, Madhya Pradesh 452010
                        </li>
                        <li>
                          <i className="fa fa-phone-volume"></i>{" "}
                          <span>Office Contact No.</span> +91-8871681905{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12} sm={12} className="footer-column">
                  <div className="footer-widget links-widget">
                    <h2 className="widget-title">Usefull Links</h2>
                    <div className="widget-content">
                      <ul className="list">
                        <li>
                          <Link to={AppRoutes.HOME_PAGE}>Home</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.ABOUT}>About Us</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.SERVICES}>Services</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.PROJECT}>Project</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.BLOG}>Blog</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.CONTACT}>Contact Us</Link>
                        </li>
                      </ul>
                      <ul className="list">
                        <li>
                          <Link to={AppRoutes.HOME_PAGE}>Home</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.ABOUT}>About Us</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.SERVICES}>Services</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.PROJECT}>Project</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.BLOG}>Blog</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.CONTACT}>Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={4} lg={12} md={12} sm={12} className="big-column">
              <Row>
                <Col lg={12} md={12} sm={12} className="footer-column">
                  <div className="footer-widget recent-posts">
                    <h2 className="widget-title">Recent Posts</h2>
                    <div className="widget-content recent-carousal">
                      <div className="item">
                        <div className="post">
                          <ul className="post-date">
                            <li>October 05, 2018</li>
                          </ul>
                          <div className="thumb">
                            <Link to={AppRoutes.BLOG}><img src={blog1} alt="" /></Link>
                          </div>
                          <h4>
                            <Link to={AppRoutes.BLOG}>
                              Lorem Ipsum is simply dummy text of the printing
                              and....
                            </Link>
                          </h4>
                        </div>
                        <div className="post">
                          <ul className="post-date">
                            <li>October 05, 2018</li>
                          </ul>
                          <div className="thumb">
                            <Link to={AppRoutes.BLOG}><img src={blog2} alt="" /></Link>
                          </div>
                          <h4>
                            <Link to={AppRoutes.BLOG}>
                              Lorem Ipsum is simply dummy text of the printing
                              and....
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="footer-bottom">
        <Container>
          <div className="inner-container">
            <div className="copyright-text">
              Copyright &copy; 2022 <Link to={AppRoutes.HOME_PAGE}> Auduacious Technology </Link> All
              rights reserved.
            </div>
            <div className="social-links">
              <ul className="social-icon-two">
                <li>
                  <Link to={{ pathname: "/" }}><i className="fab fa-facebook-f"></i></Link>
                </li>
                <li>
                  <Link to={{ pathname: "/" }}> <i className="fab fa-twitter"></i></Link>
                </li>
                <li>
                  <Link to={{ pathname: "/" }}><i className="fab fa-skype"></i></Link>
                </li>
                <li>
                  <Link to={{ pathname: "/" }}><i className="fab fa-linkedin-in"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
