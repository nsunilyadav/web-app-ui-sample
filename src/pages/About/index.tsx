import React from "react";
import AppRoutes from "@constants/AppRoutes";
import Features from "@pages/Home/Features";
import Aboutus from "@assets/images/about-img.jpg";
import Whychoose from "@assets/images/why-choose-1.jpg";
import { Container, Figure, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.less";

const About = () => {
    return (
        <div>
            <section className="page-title tophead-image">
                <Container>
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>About Us</h1>
                        </div>
                        <div className="bread-crumb">
                            <ul>
                                <li><Link to={AppRoutes.HOME_PAGE}>Home</Link></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="about-section style-three">
                <Container>
                    <Row>
                        <Col xl={6} lg={12} className="image-column">
                            <Figure className="image-box">
                                <Figure.Image src={Aboutus} />
                            </Figure>
                            <div className="video-link">
                                <Link className="link" to='/'><span className="fa fa-play" /></Link>
                            </div>
                        </Col>
                        <Col xl={6} lg={12} md={12} sm={12} className="content-column">
                            <div className="inner-column">
                                <div className="content-box">
                                    <div className="sec-title-left">
                                        <h2>Welcome to Our Software Company for Solutions</h2>
                                    </div>
                                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</h5>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</div>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore </div>
                                    <div className="link-box"><Link to='/' className="theme-btn btn-style-box">Read More</Link></div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={12} lg={12} md={12} className="clearfix fun-fact-section">
                            <div className="fact-counter">
                                <Row>
                                    <Col lg={3} md={6} sm={6} className="counter-column">
                                        <div className="count-box">
                                            <div className="count"><span className="count-text">100</span></div>
                                            <div className="separater" />
                                            <h4 className="counter-title">Project Successfull</h4>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="counter-column">
                                        <div className="count-box">
                                            <div className="count"><span className="count-text">100</span></div>
                                            <div className="separater" />
                                            <h4 className="counter-title">satisfied clients</h4>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="counter-column">
                                        <div className="count-box">
                                            <div className="count"><span className="count-text">100</span></div>
                                            <div className="separater" />
                                            <h4 className="counter-title">Team Members</h4>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="counter-column">
                                        <div className="count-box">
                                            <div className="count"><span className="count-text">100</span></div>
                                            <div className="separater" />
                                            <h4 className="counter-title">Awards</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="why-choose-us">
                <Container fluid>
                    <Row>
                        <Col lg={6} md={12} sm={12} className="image-column">
                            <Figure className="image-box">
                                <Figure.Image src={Whychoose} />
                            </Figure>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="content-cloumn">
                            <div className="inner-column">
                                <div className="sec-title left">
                                    <h2>Why Choose Us</h2>
                                    <div className="separater" />
                                </div>
                                <h5>Read Why We Expert in The Software Solution</h5>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</div>
                                <ul className="list-why-us">
                                    <li>Fast Work</li>
                                    <li>Dedicated Team</li>
                                    <li>Best Advisors</li>
                                    <li>Network Solutions</li>
                                    <li>24/7 Supports</li>
                                    <li>Work Deadline</li>
                                </ul>
                                <Link className="btn-theme btn-style-five" to='/'>Get Start</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Features />
        </div>
    );
};

export default About;
