import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
// import Header from "./Header";
import styles from "./styles.module.less";

const Main = () => {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.mainContainer}>
        <Outlet />
      </div>
      <Footer />
      <a className="scroll-to-top" href="#root">
        <span className="fas fa-angle-double-up"></span>
      </a>
      {/* <Link className="scroll-to-top" to="/">
      <span className="fas fa-angle-double-up"></span>
      </Link> */}
    </>
  );
};

export default Main;
