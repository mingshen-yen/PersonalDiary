import { createBrowserRouter, Link, Navigate, Outlet } from "react-router";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import ProctedLayout from "./components/layout/ProctedLayout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/protected",
        element: <ProctedLayout />,
      },
    ],
  },
]);
