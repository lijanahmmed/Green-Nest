import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import PlantDetails from "../Pages/PlantDetails";
import PrivateRoute from "../Components/PrivateRoute";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Policy from "../Components/Policy";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/plants",
        Component: Plants,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/plant-details/:id",
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "/privacy-policy",
        Component: Policy
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
