import React from "react";
import AppRoutes from "@constants/AppRoutes";
import projectImage from "@assets/images/15.jpg";
import graphImage from "@assets/images/18.jpg";
import { Container, Figure, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.less";

const Project = () => {
  return (
    <div>
      <section className="page-title tophead-image">
        <div className="container">
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>Project Details</h1>
            </div>
            <div className="bread-crumb">
              <ul>
                <li><Link to={AppRoutes.HOME_PAGE}>Home</Link></li>
                <li>Project Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="project-details-section">
        <div className="project-detail">
          <Container>
            <div className="lower-content">
              <Row>
                <Col lg={8} md={12} sm={12} className="content-column">
                  <div className="inner-column">
                    <h2>Project Name and Details</h2>
                    <Figure className="image">
                      <Figure.Image src={projectImage} />
                    </Figure>
                    <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks and mortar solutions without functional solutions. Keeping your eye on the ball while performing a deep dive on the start-up mentality to convergence on cross-platform integration.</p>
                    <h2>Challenge</h2>
                    <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks and mortar solutions without functional solutions. Keeping your eye on the ball while performing a deep dive on the start-up mentality to convergence on cross-platform integration.</p>
                    <p>Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive excellence convergence on cross-platform integration.</p>
                  </div>
                </Col>
                <Col lg={4} md={12} sm={12} className="info-column">
                  <div className="inner-column">
                    <h2>Case Study Details</h2>
                    <ul className="info-list">
                      <li><strong>Client Name:</strong> Tallinn Groups</li>
                      <li><strong>Location: </strong> Willington Park, Brooklyn</li>
                      <li><strong>Project Value: </strong> $26,500</li>
                      <li><strong>Year Completed: </strong> 2019</li>
                      <li><strong>Project Under: </strong> Financial Plan</li>
                      <li><strong>Advisor: </strong> Jone Doe</li>
                      <li><strong>Client Name:</strong> Tallinn Groups</li>
                      <li><strong>Location: </strong> Willington Park, Brooklyn</li>
                      <li><strong>Project Value: </strong> $26,500</li>
                      <li><strong>Year Completed: </strong> 2019</li>
                      <li><strong>Project Under: </strong> Financial Plan</li>
                      <li><strong>Advisor: </strong> Jone Doe</li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={8} md={12} sm={12}>
                  <div className="inner-column">
                    <h2>Strategy and Solution</h2>
                    <p>Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive excellence convergence on cross-platform integration.</p>
                    <h2>Result and Client Benefits</h2>
                    <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivating one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer report service for state of the art customer service. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.</p>
                    <h5>34% Value Reducation Validation</h5>
                    <p>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                    <div className="list-image">
                      <Row>
                        <Col xl={6} lg={12} md={12}>
                          <ul className="list-style-one">
                            <li>Professionally cultivate one-to-one customer service with robust ideas.</li>
                            <li>Podcasting operational change management inside of workflows.</li>
                          </ul>
                          <h5>Savings of US$ 52,000</h5>
                          <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.</p>
                          <Link to='/' className="pdf-btn theme-btn btn-style-four">Download PDF <i className="icon far fa-file-pdf" /></Link>
                        </Col>
                        <Col xl={6} lg={12} md={12}>
                          <div className="image-box-right">
                            <Figure className="image">
                              <Figure.Image src={graphImage} />
                            </Figure>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Project;
