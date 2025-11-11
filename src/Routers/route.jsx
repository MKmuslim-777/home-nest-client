import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/Layouts/HomeLayout/HomeLayout";
import Home from "../Components/Home/Home";
import AllProperties from "../Components/AllProperties/AllProperties";
import AuthLayout from "../Components/Layouts/AuthLayout/AuthLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import MyProperties from "../Components/MyProperties/MyProperties";
import PropertyDetails from "../Components/PropertyDetails/PropertyDetails";

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
        loader: () => fetch("http://localhost:3000/properties"),
      },
      {
        path: "/myProperties",
        Component: MyProperties,
        loader: () => fetch("http://localhost:3000/properties"),
      },
      {
        path: "/propertyDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/properties/${params.id}`),
        element: <PropertyDetails></PropertyDetails>,
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
