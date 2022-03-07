import React from "react";
import AppRoutes from "@constants/AppRoutes";
import projectImage from "@assets/images/15.jpg";
import { Container, Figure, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.less";

const Blog = () => {
  return (
    <div>
      <section className="page-title tophead-image">
        <div className="container">
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>Blog</h1>
            </div>
            <div className="bread-crumb">
              <ul>
                <li><Link to={AppRoutes.HOME_PAGE}>Home</Link></li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="sidebar-page-container">
        <Container>
          <Row>
            <Col lg={8} md={12} sm={12} className="content-side">
              <div className="blog-classic">
                <div className="news-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <Figure className="image">
                        <Figure.Image src={projectImage} />
                      </Figure>
                      <div className="overlay-box"><Link to='/'><i className="fas fa-share"></i></Link></div>
                    </div>
                    <div className="caption-box">
                      <h3><Link to='/'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Link></h3>
                      <ul className="post-meta">
                        <li><i className="far fa-comments" />Comments</li>
                        <li><i className="fas fa-user" />Jone Doe</li>
                        <li><i className="far fa-calendar-check" />21 Feb, 2022</li>
                      </ul>
                      <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                      <Link className="readmore-btn" to='/'>Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="news-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <Figure className="image">
                        <Figure.Image src={projectImage} />
                      </Figure>
                      <div className="overlay-box"><Link to='/'><i className="fas fa-share"></i></Link></div>
                    </div>
                    <div className="caption-box">
                      <h3><Link to='/'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Link></h3>
                      <ul className="post-meta">
                        <li><i className="far fa-comments" />Comments</li>
                        <li><i className="fas fa-user" />Jone Doe</li>
                        <li><i className="far fa-calendar-check" />21 Feb, 2022</li>
                      </ul>
                      <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                      <Link className="readmore-btn" to='/'>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="styled-pagination">
                <ul className="clearfix">
                  <li className="prev-post"><Link to='/'><span className="fas fa-arrow-left" /></Link></li>
                  <li><Link to='/'>1</Link></li>
                  <li><Link to='/'>2</Link></li>
                  <li className="active"><Link to='/'>3</Link></li>
                  <li><Link to='/'>4</Link></li>
                  <li className="next-post"><Link to='/'><span className="fas fa-arrow-right" /></Link></li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12} className="content-side">
              <aside className="sidebar default-sidebar">
                <div className="sidebar-widget search-box">
                  <form method="post" action="blog.html">
                    <div className="form-group">
                      <input type="search" name="search-field" required />
                      <button type="submit"><span className="icon fa fa-search" /></button>
                    </div>
                  </form>
                </div>
                <div className="sidebar-widget categories">
                  <div className="sidebar-title">
                    <h3>Best Categories</h3>
                  </div>
                  <ul className="cat-list">
                    <li><Link to='/'>UX Designer <span>(6)</span></Link></li>
                    <li><Link to='/'>Web Devlopar <span>(9)</span></Link></li>
                    <li className="active"><Link to='/'>Mobile Application <span>(3)</span></Link></li>
                    <li><Link to='/'>Marketing <span>(5)</span></Link></li>
                    <li><Link to='/'>My Blog Details <span>(7)</span></Link></li>
                  </ul>
                </div>
                <div className="sidebar-widget latest-news">
                  <div className="sidebar-title">
                    <h3>Recent Post</h3>
                  </div>
                  <div className="widget-content">
                    <article className="post">
                      <div className="post-thumb">
                        <Figure>
                          <Figure.Image src={projectImage} />
                        </Figure>
                      </div>
                      <h3><Link to='/'>Lorem Ipsum is simply dummy text of the printing.</Link></h3>
                      <div className="post-info">Dec. 20, 2021</div>
                    </article>
                    <article className="post">
                      <div className="post-thumb">
                        <Figure>
                          <Figure.Image src={projectImage} />
                        </Figure></div>
                      <h3><Link to='/'>Lorem Ipsum is simply dummy text of the printing.</Link></h3>
                      <div className="post-info">Dec. 20, 2021</div>
                    </article>
                    <article className="post">
                      <div className="post-thumb">
                        <Figure>
                          <Figure.Image src={projectImage} />
                        </Figure>
                      </div>
                      <h3><Link to='/'>Lorem Ipsum is simply dummy text of the printing.</Link></h3>
                      <div className="post-info">Dec. 20, 2021</div>
                    </article>
                  </div>
                </div>
                <div className="sidebar-widget tags">
                  <div className="sidebar-title">
                    <h3>Cool Tags</h3>
                  </div>
                  <ul className="tag-list clearfix">
                    <li><Link to='/'>Design</Link></li>
                    <li><Link to='/'>UI/UX</Link></li>
                    <li><Link to='/'>SEO</Link></li>
                    <li><Link to='/'>My Blog</Link></li>
                    <li><Link to='/'>Logo</Link></li>
                    <li><Link to='/'>Business</Link></li>
                    <li><Link to='/'>Development</Link></li>
                  </ul>
                </div>
              </aside>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
