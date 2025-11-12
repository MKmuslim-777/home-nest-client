import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/Layouts/HomeLayout/HomeLayout";
import Home from "../Components/Home/Home";
import AllProperties from "../Components/AllProperties/AllProperties";
import AuthLayout from "../Components/Layouts/AuthLayout/AuthLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import MyProperties from "../Components/MyProperties/MyProperties";
import PropertyDetails from "../Components/PropertyDetails/PropertyDetails";
import PrivateRoute from "./PrivetRoute";
import UpdateProperty from "../Components/UpdateProperty/UpdateProperty";

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
        loader: () =>
          fetch("https://home-nest-server-ivory.vercel.app/properties"),
      },
      {
        path: "/myProperties",
        element: (
          <PrivateRoute>
            <MyProperties></MyProperties>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://home-nest-server-ivory.vercel.app/properties"),
      },
      {
        path: "/propertyDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://home-nest-server-ivory.vercel.app/properties/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProperty/:id",
        loader: ({ params }) =>
          fetch(
            `https://home-nest-server-ivory.vercel.app/properties/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateProperty></UpdateProperty>
          </PrivateRoute>
        ),
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
