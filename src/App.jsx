import React from "react";
import { RouterProvider } from "react-router";
import { AppRoutes } from "./components/routes/Routes";

function App() {
  return <RouterProvider router={AppRoutes} />;
}

export default App;
