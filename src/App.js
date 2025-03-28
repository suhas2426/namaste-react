import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "../index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUS from "./components/AboutUS";
import RouterError from "./components/RouterError";
import ContactUS from "./components/ContactUS";
import Cart from "./components/Cart";
import RestaurentMenu from "./components/RestaurentMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <RouterError />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUS />,
      },
      {
        path: "/contactUS",
        element: <ContactUS />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
