import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error404 from "../pages/404/404";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Portfolio1 from "../pages/Portfolios/Portfolio1";
import Registration from "../pages/Registration/Registration";

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
        element: <Portfolio1 />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Registration /> },
  { path: "*", element: <Error404 /> },
]);

export default router;
