import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Search from "./pages/Search";
import GifPage from "./pages/GifPage";
import Fav from "./pages/Fav";
import GifProvider from "./Context/gifContext";

// pages we will build

// home
// categories
// search
// single gif page
// fav

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/fav",
        element: <Fav />,
      },
    ],
  },
]);

function App() {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
