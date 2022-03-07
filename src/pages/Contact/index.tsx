import React from "react";
import AppRoutes from "@constants/AppRoutes";
import ContactUs from "@pages/Home/Contact";
import Team from "@assets/images/team-1.jpg";
import { Container, Figure, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.less";

const Contact = () => {
  return (
    <div>
      <section className="page-title tophead-image">
        <Container>
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>Our Contact</h1>
            </div>
            <div className="bread-crumb">
              <ul>
                <li><Link to={AppRoutes.HOME_PAGE}>Home</Link></li>
                <li>Our Contact</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className="team-section style-two">
        <Container>
          <Row>
            <Col xl={3} lg={6} md={6} sm={6}>
              {/* Team Block */}
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Team} />
                    </Figure>
                  </div>
                  <div className="info-box">
                    <h3 className="name"><Link to='/'>Jone Doe</Link></h3>
                    <span className="designation">Project Manager</span>
                  </div>
                  <ul className="social-links">
                    <li><Link to='/'><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to='/'><i className="fab fa-twitter" /></Link></li>
                    <li><Link to='/'><i className="fab fa-google-plus-g" /></Link></li>
                    <li><Link to='/'><i className="fab fa-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} sm={6}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Team} />
                    </Figure>
                  </div>
                  <div className="info-box">
                    <h3 className="name"><Link to='/'>Jone Doe</Link></h3>
                    <span className="designation">Project Manager</span>
                  </div>
                  <ul className="social-links">
                    <li><Link to='/'><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to='/'><i className="fab fa-twitter" /></Link></li>
                    <li><Link to='/'><i className="fab fa-google-plus-g" /></Link></li>
                    <li><Link to='/'><i className="fab fa-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} sm={6}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Team} />
                    </Figure>
                  </div>
                  <div className="info-box">
                    <h3 className="name"><Link to='/'>Jone Doe</Link></h3>
                    <span className="designation">Project Manager</span>
                  </div>
                  <ul className="social-links">
                    <li><Link to='/'><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to='/'><i className="fab fa-twitter" /></Link></li>
                    <li><Link to='/'><i className="fab fa-google-plus-g" /></Link></li>
                    <li><Link to='/'><i className="fab fa-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} sm={6}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Team} />
                    </Figure>
                  </div>
                  <div className="info-box">
                    <h3 className="name"><Link to='/'>Jone Doe</Link></h3>
                    <span className="designation">Project Manager</span>
                  </div>
                  <ul className="social-links">
                    <li><Link to='/'><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to='/'><i className="fab fa-twitter" /></Link></li>
                    <li><Link to='/'><i className="fab fa-google-plus-g" /></Link></li>
                    <li><Link to='/'><i className="fab fa-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} sm={6}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Team} />
                    </Figure>
                  </div>
                  <div className="info-box">
                    <h3 className="name"><Link to='/'>Jone Doe</Link></h3>
                    <span className="designation">Project Manager</span>
                  </div>
                  <ul className="social-links">
                    <li><Link to='/'><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to='/'><i className="fab fa-twitter" /></Link></li>
                    <li><Link to='/'><i className="fab fa-google-plus-g" /></Link></li>
                    <li><Link to='/'><i className="fab fa-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} sm={6}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Team} />
                    </Figure>
                  </div>
                  <div className="info-box">
                    <h3 className="name"><Link to='/'>Jone Doe</Link></h3>
                    <span className="designation">Project Manager</span>
                  </div>
                  <ul className="social-links">
                    <li><Link to='/'><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to='/'><i className="fab fa-twitter" /></Link></li>
                    <li><Link to='/'><i className="fab fa-google-plus-g" /></Link></li>
                    <li><Link to='/'><i className="fab fa-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} sm={6}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Team} />
                    </Figure>
                  </div>
                  <div className="info-box">
                    <h3 className="name"><Link to='/'>Jone Doe</Link></h3>
                    <span className="designation">Project Manager</span>
                  </div>
                  <ul className="social-links">
                    <li><Link to='/'><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to='/'><i className="fab fa-twitter" /></Link></li>
                    <li><Link to='/'><i className="fab fa-google-plus-g" /></Link></li>
                    <li><Link to='/'><i className="fab fa-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} sm={6}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Team} />
                    </Figure>
                  </div>
                  <div className="info-box">
                    <h3 className="name"><Link to='/'>Jone Doe</Link></h3>
                    <span className="designation">Project Manager</span>
                  </div>
                  <ul className="social-links">
                    <li><Link to='/'><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to='/'><i className="fab fa-twitter" /></Link></li>
                    <li><Link to='/'><i className="fab fa-google-plus-g" /></Link></li>
                    <li><Link to='/'><i className="fab fa-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ContactUs />
    </div>
  );
};

export default Contact;
