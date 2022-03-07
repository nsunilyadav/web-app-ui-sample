import AppRoutes from "@constants/AppRoutes";
import { Link } from "react-router-dom";
import ClientImage from "@assets/images/clients-1.png";
import { Container, Figure } from "react-bootstrap";
import "./styles.less";

const Clients = () => {
  return (
    <section className="clients-section">
      <Container>
        <div className="sponsors-outer">
          <ul className="sponsors-carousel">
            <li className="slide-item"><Link to={AppRoutes.ABOUT}><Figure.Image src={ClientImage} /></Link></li>
            <li className="slide-item"><Link to={AppRoutes.ABOUT}><Figure.Image src={ClientImage} /></Link></li>
            <li className="slide-item"><Link to={AppRoutes.ABOUT}><Figure.Image src={ClientImage} /></Link></li>
            <li className="slide-item"><Link to={AppRoutes.ABOUT}><Figure.Image src={ClientImage} /></Link></li>
            <li className="slide-item"><Link to={AppRoutes.ABOUT}><Figure.Image src={ClientImage} /></Link></li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Clients;
