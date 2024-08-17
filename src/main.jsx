import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home></Home>
      </PrivateRoute>
    ),
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
