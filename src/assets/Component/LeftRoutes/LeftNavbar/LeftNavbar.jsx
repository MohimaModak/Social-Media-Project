import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs";
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { LiaBuysellads } from "react-icons/lia";
import { MdBloodtype } from "react-icons/md";
import { PiTreeFill } from "react-icons/pi";
import { GiTwirlCenter } from "react-icons/gi";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdDynamicFeed } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { SiFacebookgaming } from "react-icons/si";
import { RiFundsBoxFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import "./LeftNavbar.css";
const LeftNavbar = () => {
  const [showMore, setShowMore] = useState(false);

  const handleSeeMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="p-5 h-screen overflow-y-auto body left-navbar-container w-80 border shadow-2xl">
      <div className="flex justify-center items-center">
        <div className="">
          <div className="flex items-center gap-5">
            <NavLink
              to="/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fHww"
                alt=""
                className="w-8 h-8 rounded-full"
              />
            </NavLink>
            <h1 className="text-xl font-semibold">Mohima</h1>
          </div>

          <div className="flex items-center gap-5">
            <NavLink
              to="/Friends"
              className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
            >
              <div className="text-blue-600">
                {" "}
                <FaUserFriends />
              </div>
            </NavLink>
            <h1 className="text-xl font-semibold">Friends</h1>
          </div>

          <div className="flex items-center gap-5">
            <NavLink
              to="/Welcome"
              className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
            >
              <div className="text-blue-600">
                {" "}
                <RiFacebookCircleFill />
              </div>
            </NavLink>
            <h1 className="text-xl font-semibold">Welcome</h1>
          </div>

          <div className="flex items-center gap-5">
            <NavLink
              to="/Memories"
              className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
            >
              <div className="text-blue-600">
                <BsStopwatchFill />
              </div>
            </NavLink>
            <h1 className="text-xl font-semibold">Memories</h1>
          </div>

          <div className="flex items-center gap-5">
            <NavLink
              to="/Saved"
              className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
            >
              <div class="linear bg-gradient from-red-600 to-green-500">
                <MdOutlineSaveAlt />
              </div>
            </NavLink>
            <h1 className="text-xl font-medium">Saved</h1>
          </div>

          <div className="flex items-center gap-5">
            <NavLink
              to="/Group"
              className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
            >
              <MdGroups />
            </NavLink>
            <h1 className="text-xl font-medium">Groups</h1>
          </div>

          <div className="flex items-center gap-5">
            <NavLink
              to="/Video"
              className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
            >
              <MdOutlineOndemandVideo />
            </NavLink>
            <h1 className="text-xl font-medium">Video</h1>
          </div>

          <div className="flex items-center gap-5">
            <NavLink
              to="/AddsManager"
              className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
            >
              <LiaBuysellads />
            </NavLink>
            <h1 className="text-xl font-medium">Ads Manager</h1>
          </div>

          <div className="flex items-center gap-5">
            <NavLink
              to="/BloodDonations"
              className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
            >
              <MdBloodtype />
            </NavLink>
            <h1 className="text-xl font-medium">Blood Donations</h1>
          </div>

          <div className="flex items-center gap-5">
            <NavLink
              to="/ClimateChangeCenter"
              className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
            >
              <PiTreeFill />
            </NavLink>
            <h1 className="text-xl font-medium">Climate Change Center</h1>
          </div>

          <div className="flex items-center gap-5">
            <NavLink
              to="/CrisisResponse"
              className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
            >
              <GiTwirlCenter />
            </NavLink>
            <h1 className="text-xl font-medium">Crisis Response</h1>
          </div>

          {showMore && (
            <>
              <div className="flex items-center gap-5">
                <NavLink
                  to="/Events"
                  className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
                >
                  <MdOutlineVideoSettings />
                </NavLink>
                <h1 className="text-xl font-medium">Events</h1>
              </div>
              <div className="flex items-center gap-5">
                <NavLink
                  to="/Feeds"
                  className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
                >
                  <MdDynamicFeed />
                </NavLink>
                <h1 className="text-xl font-medium">Feeds</h1>
              </div>
              <div className="flex items-center gap-5">
                <NavLink
                  to="/Foundraisers"
                  className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
                >
                  <RiFundsBoxFill />
                </NavLink>
                <h1 className="text-xl font-medium">Fundraisers</h1>
              </div>
              <div className="flex items-center gap-5">
                <NavLink
                  to="/GamingVideo"
                  className={`text-3xl mt-3 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
                >
                  <SiFacebookgaming />
                </NavLink>
                <h1 className="text-xl font-medium">GamingVideo</h1>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className="flex justify-center items-center font-semibold te"
        onClick={handleSeeMore}
      >
        <button>
          {showMore ? (
            "See less"
          ) : (
            <div>
              <div className="flex text-xl justify-center items-center gap-3">
                <FaAngleDown /> See more
              </div>
            </div>
          )}
        </button>
      </div>
      <div className="border mt-3"></div>

      <div>
        <h1 className="text-xl font-semibold mt-3">Your shortcuts</h1>
        <div>
          <div className="flex items-center gap-5 mt-3">
            <NavLink
              to="/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <img
                src="https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705017600&semt=sph"
                alt=""
                className="w-8 h-8 rounded-md"
              />
            </NavLink>
            <h1 className="text-xl font-semibold">Programming</h1>
          </div>

          <div className="flex items-center gap-5 mt-3">
            <NavLink
              to="/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <img
                src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/261944603_950077925608457_2660726067268997938_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=yvgxEfFV8CkAX89KNHx&_nc_ht=scontent.fdac157-1.fna&oh=00_AfCv1_DwzBpf48YGlFjEXFEfLLr7tOOeBa_TxpJiTtS_WQ&oe=65A699F3"
                alt=""
                className="w-8 h-8 rounded-md"
              />
            </NavLink>
            <h1 className="text-xl font-semibold">Powered by Drabin Paul</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
