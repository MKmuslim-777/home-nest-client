import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/Layouts/HomeLayout/HomeLayout";
import Home from "../Components/Home/Home";
import AllProperties from "../Components/AllProperties/AllProperties";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/AllProperties",
        Component: AllProperties,
      },
    ],
  },
]);

export default router;
