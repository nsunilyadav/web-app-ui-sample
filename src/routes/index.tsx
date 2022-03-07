import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Routes from "./routes";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { MutatingDots } from 'react-loader-spinner'
import Header from "@layouts/Main/Header";


const RouterOutlet = () => {
  const routes = useRoutes(Routes);

  return routes;
};


const Router: React.FC = () => {
  return (
    <BrowserRouter>
    <Header />
      <React.Suspense fallback={<MutatingDots color="#2154cf" secondaryColor="#ff9c00" height={100} width={100}/>}>
        <RouterOutlet />
      </React.Suspense>
    </BrowserRouter>
  );
};

export default Router;
