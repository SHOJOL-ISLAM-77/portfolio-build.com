import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error404 from "../pages/404/404";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Portfolio1 from "../pages/Portfolios/Portfolio1";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoutes";
import Templates from "../pages/ViewTemplates/Templates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: (
          <PrivateRoute>
            <Portfolio1 />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },
      { path: "blogs", element: <Blogs /> },
      { path: "/about", element: <About /> },
      { path: "/templates", element: <Templates /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Registration /> },
  { path: "*", element: <Error404 /> },
]);

export default router;
