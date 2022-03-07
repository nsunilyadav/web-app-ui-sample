import AppRoutes from "@constants/AppRoutes";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Figure, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.less";
import Logo from "@assets/images/logo.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const { pathname } = useLocation();


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <Navbar bg="light" expand="xl" fixed={scroll ? "top" : undefined} className={styles.navbar}>
      <Container>
        <div className={styles.navbarSection}>

          <Navbar.Brand className={styles.navbarBrand} as="div">
            <Link to={AppRoutes.HOME_PAGE}>
              <Figure className={styles.imageBox}>
                <Figure.Image src={Logo} />
              </Figure>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`m-auto ${styles.navSection}`}>
              <Nav.Link as="div" className={styles.navLink} active={pathname === AppRoutes.HOME_PAGE}>
                <Link to={AppRoutes.HOME_PAGE}>Home</Link>
              </Nav.Link>
              <Nav.Link as="div" className={styles.navLink} active={pathname === AppRoutes.ABOUT}>
                <Link to={AppRoutes.ABOUT}>About US</Link>
              </Nav.Link>
              <Nav.Link as="div" className={styles.navLink} active={pathname === AppRoutes.SERVICES}>
                <Link to={AppRoutes.SERVICES}>Services</Link>
              </Nav.Link>
              <Nav.Link as="div" className={styles.navLink} active={pathname === AppRoutes.PROJECT}>
                <Link to={AppRoutes.PROJECT}>Project</Link>
              </Nav.Link>
              <Nav.Link as="div" className={styles.navLink} active={pathname === AppRoutes.BLOG}>
                <Link to={AppRoutes.BLOG}>Blog</Link>
              </Nav.Link>
              <Nav.Link as="div" className={styles.navLink} active={pathname === AppRoutes.CONTACT}>
                <Link to={AppRoutes.CONTACT}>Contact</Link>
              </Nav.Link>
            </Nav>
            <Link to={AppRoutes.ABOUT} className="ms-auto theme-btn btn-style-box btn border-0"> Get A Quote </Link>
          </Navbar.Collapse>

          <Offcanvas placement='end' show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Figure>
                  <Figure.Image src={Logo} width={170}/>
                </Figure>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className={styles.navbar}>
                <Nav className={styles.navSection}>
                  <Nav.Link as="div" className={styles.navLink} active={pathname === AppRoutes.HOME_PAGE} onClick={handleClose}>
                    <Link to={AppRoutes.HOME_PAGE}>Home</Link>
                  </Nav.Link>
                  <Nav.Link as="div" className={styles.navLink} active={pathname === AppRoutes.ABOUT} onClick={handleClose}>
                    <Link to={AppRoutes.ABOUT}>About US</Link>
                  </Nav.Link>
                  <Nav.Link as="div" className={styles.navLink} active={pathname === AppRoutes.SERVICES} onClick={handleClose}>
                    <Link to={AppRoutes.SERVICES}>Services</Link>
                  </Nav.Link>
                  <Nav.Link as="div" className={styles.navLink} active={pathname === AppRoutes.PROJECT} onClick={handleClose}>
                    <Link to={AppRoutes.PROJECT}>Project</Link>
                  </Nav.Link>
                  <Nav.Link as="div" className={styles.navLink} active={pathname === AppRoutes.BLOG} onClick={handleClose}>
                    <Link to={AppRoutes.BLOG}>Blog</Link>
                  </Nav.Link>
                  <Nav.Link as="div" className={styles.navLink} active={pathname === AppRoutes.CONTACT} onClick={handleClose}>
                    <Link to={AppRoutes.CONTACT}>Contact</Link>
                  </Nav.Link>
                  <Link to={AppRoutes.ABOUT} className="ms-auto theme-btn btn-style-box btn border-0" onClick={handleClose}> Get A Quote </Link>
                </Nav>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
