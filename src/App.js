import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Code Splitting
// Lazy Loading
// Chuncking
// Load on Demanding
// Dynamic Loading
// Variable name should be same as component name
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

// AppLayout component -  Header, Footer and Body component
const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />); // Call element/component inside render method

// To enable routing, Rendered the Router Provider component instead of AppLayout
root.render(
  <RouterProvider
    router={appRouter}
    future={{
      v7_startTransition: true,
    }}
  />
);
