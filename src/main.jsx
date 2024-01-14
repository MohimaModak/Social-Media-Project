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
import Friends from "./assets/Component/LeftRoutes/Friends/Friends.jsx";
import Memories from "./assets/Component/LeftRoutes/Memories/Memories.jsx";
import Saved from "./assets/Component/LeftRoutes/Saved/Saved.jsx";
import AddsManager from "./assets/Component/LeftRoutes/AddsManager/AddsManager.jsx";
import ClimateChangeCenter from "./assets/Component/LeftRoutes/CrisisResponse/CrisisResponse.jsx";
import CrisisResponse from "./assets/Component/LeftRoutes/CrisisResponse/CrisisResponse.jsx";
import Events from "./assets/Component/LeftRoutes/Events/Events.jsx";
import Feeds from "./assets/Component/LeftRoutes/Feeds/Feeds.jsx";
import GamingVideo from "./assets/Component/LeftRoutes/GamingVideo/GamingVideo.jsx";
import Foundraisers from "./assets/Component/LeftRoutes/Foundraisers/Foundraisers.jsx";
import LeftNavbar from "./assets/Component/LeftRoutes/LeftNavbar/LeftNavbar.jsx";

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
        path: "/LeftNavbar",
        element: <LeftNavbar></LeftNavbar>,
        // loader: () => fetch("http://localhost:5000/leftNav"),
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
      {
        path: "/Friends",
        element: <Friends></Friends>,
      },
      {
        path: "/Memories",
        element: <Memories></Memories>,
      },
      {
        path: "/Saved",
        element: <Saved></Saved>,
      },
      {
        path: "/Group",
        element: <Group></Group>,
      },
      {
        path: "/AddsManager",
        element: <AddsManager></AddsManager>,
      },
      {
        path: "/ClimateChangeCenter",
        element: <ClimateChangeCenter></ClimateChangeCenter>,
      },
      {
        path: "/CrisisResponse",
        element: <CrisisResponse></CrisisResponse>,
      },
      {
        path: "/Events",
        element: <Events></Events>,
      },
      {
        path: "/Feeds",
        element: <Feeds></Feeds>,
      },
      {
        path: "/GamingVideo",
        element: <GamingVideo></GamingVideo>,
      },
      {
        path: "/Foundraisers",
        element: <Foundraisers></Foundraisers>,
      },
      {
        path: "/GamingVideo",
        element: <GamingVideo></GamingVideo>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
