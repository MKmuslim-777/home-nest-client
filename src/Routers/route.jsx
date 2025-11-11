import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/Layouts/HomeLayout/HomeLayout";
import Home from "../Components/Home/Home";
import AllProperties from "../Components/AllProperties/AllProperties";
import AuthLayout from "../Components/Layouts/AuthLayout/AuthLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

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
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
