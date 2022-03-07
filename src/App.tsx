import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// import { Link } from "react-router-dom";
import Router from "./routes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
