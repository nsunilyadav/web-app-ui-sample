import AppRoutes from "@constants/AppRoutes";
import React from "react";
import { RouteObject } from "react-router-dom";

const Main = React.lazy(() => import("@layouts/Main"));
const Home = React.lazy(() => import("@pages/Home"));
const About = React.lazy(() => import("@pages/About"));
const Services = React.lazy(() => import("@pages/Service"));
const Project = React.lazy(() => import("@pages/Project"));
const Blog = React.lazy(() => import("@pages/Blog"));
const Contact = React.lazy(() => import("@pages/Contact"));

/**
 *
 */
const Routes: RouteObject[] = [
  {
    path: AppRoutes.HOME_PAGE,
    element: <Main />,
    children: [
      {
        path: AppRoutes.HOME_PAGE,
        element: <Home />,
      }, {
        path: AppRoutes.ABOUT,
        element: <About />,
      }, {
        path: AppRoutes.SERVICES,
        element: <Services />,
      },
      {
        path: AppRoutes.PROJECT,
        element: <Project />,
      },
      {
        path: AppRoutes.BLOG,
        element: <Blog />,
      },
      {
        path: AppRoutes.CONTACT,
        element: <Contact />,
      },
    ],
  },
];

export default Routes;
