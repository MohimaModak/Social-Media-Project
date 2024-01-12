import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./assets/Component/Root/Root.jsx";
import Home from "./assets/Component/Routes/Home/Home.jsx";
import Profile from "./assets/Component/Routes/Profile/Profile.jsx";
import SearchBar from "./assets/Component/Routes/SearchBar/SearchBar.jsx";
import Video from "./assets/Component/Routes/Video/Video.jsx";
import MarketPlace from "./assets/Component/Routes/MarketPlace/MarketPlace.jsx";
import Gaming from "./assets/Component/Routes/Gaming/Gaming.jsx";
import Menu from "./assets/Component/Routes/Menu/Menu.jsx";
import Chat from "./assets/Component/Routes/Chat/Chat.jsx";
import Notifications from "./assets/Component/Routes/Notifications/Notifications.jsx";
import IconOfProfile from "./assets/Component/Routes/IconOfProfile/IconOfProfile.jsx";
import Group from "./assets/Component/Routes/Group/Group.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Profile",
        element: <Profile></Profile>,
      },
      {
        path: "/SearchBar",
        element: <SearchBar></SearchBar>,
      },
      {
        path: "/Video",
        element: <Video></Video>,
      },
      {
        path: "/MarketPlace",
        element: <MarketPlace></MarketPlace>,
      },
      {
        path: "/Gaming",
        element: <Gaming></Gaming>,
      },
      {
        path: "/Menu",
        element: <Menu></Menu>,
      },
      {
        path: "/Chat",
        element: <Chat></Chat>,
      },
      {
        path: "/Notifications",
        element: <Notifications></Notifications>,
      },
      {
        path: "/IconOfProfile",
        element: <IconOfProfile></IconOfProfile>,
      },
      {
        path: "/Group",
        element: <Group></Group>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
