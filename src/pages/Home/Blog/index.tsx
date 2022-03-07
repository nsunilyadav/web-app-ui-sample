import AppRoutes from "@constants/AppRoutes";
import Blog from "@assets/images/blog1.jpg";
import { Col, Container, Figure, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.less";

const Blogs = () => {
  return (
    <section className="blog-section-box">
      <Container>
        <div className="sec-title left">
          <h2>Latest Blog Update</h2>
          <div className="separater"></div>
        </div>
        <Row className="blog-box">
          <Col xl={4} lg={4} md={4}>
            <div className="blog-carousel">
              <div className="blog-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Blog} />
                    </Figure>
                  </div>
                  <div className="caption-box">
                    <h3>
                      <Link to={AppRoutes.BLOG}>What is Lorem Ipsum?...</Link>
                    </h3>
                    <ul className="post-meta">
                      <li>Post: 15 April 2018</li>
                    </ul>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry..
                    </div>
                    <Link to={AppRoutes.BLOG} className="readmore-btn"> Read More <i className="far fa-arrow-alt-circle-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4} md={4}>
            <div className="blog-carousel">
              <div className="blog-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Blog} />
                    </Figure>
                  </div>
                  <div className="caption-box">
                    <h3>
                      <Link to={AppRoutes.BLOG}>What is Lorem Ipsum?...</Link>
                    </h3>
                    <ul className="post-meta">
                      <li>Post: 15 April 2018</li>
                    </ul>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry..
                    </div>
                    <Link to={AppRoutes.BLOG} className="readmore-btn"> Read More <i className="far fa-arrow-alt-circle-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4} md={4}>
            <div className="blog-carousel">
              <div className="blog-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Blog} />
                    </Figure>
                  </div>
                  <div className="caption-box">
                    <h3>
                      <Link to={AppRoutes.BLOG}>What is Lorem Ipsum?...</Link>
                    </h3>
                    <ul className="post-meta">
                      <li>Post: 15 April 2018</li>
                    </ul>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry..
                    </div>
                    <Link to={AppRoutes.BLOG} className="readmore-btn"> Read More <i className="far fa-arrow-alt-circle-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
