import { Container } from "react-bootstrap";
import AppRoutes from "@constants/AppRoutes";
import { Link } from "react-router-dom";
import "./styles.less";

const Banner = () => {
  return (
    <section className="banner-section-box">
      <div className="carousel-column">
        <div className="carousel-outer">
          <ul className="banner-carousel">
            <li className="slide-item background-image">
              <Container>
                <div className="content-box">
                  <div className="content-box-inn">
                    <h1>
                      Digital Solution for <br />
                      Your Business
                    </h1>
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
                      Donec consectetur tortor{" "}
                    </div>
                    <div className="link-box">
                      <Link to={AppRoutes.CONTACT} className="theme-btn btn-style-one">Read More</Link>
                    </div>
                  </div>
                </div>
              </Container>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
