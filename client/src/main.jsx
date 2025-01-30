import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import router from "./routes/routes.jsx";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="bg-primary min-h-screen">
        <ToastContainer />
        <RouterProvider router={router} />
      </div>
    </Provider>
  </StrictMode>
);
