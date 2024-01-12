import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { TbReplaceFilled } from "react-icons/tb";
import { MdGroups } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import { CgMenuGridR } from "react-icons/cg";
import { RiWechatPayFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-5">
        <NavLink
          to="/IconOfProfile"
          className={`text-4xl  text-blue-600 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          <FaFacebook />
        </NavLink>
        <NavLink
          to="/SearchBar"
          className={`({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          <input type="text" className="rounded-full  border" />
        </NavLink>
      </div>

      <div className="flex justify-center items-center gap-20">
        <NavLink
          to="/"
          className={`text-3xl ${
            location.pathname === '/' ? 'text-blue-600' : ''
          }`}
        >
          <IoHome />
        </NavLink>
        <NavLink
          to="/Video"
          className={`text-3xl ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          <MdOutlineOndemandVideo />
        </NavLink>
        <NavLink
          to="/MarketPlace"
          className={`text-3xl ({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""`}
        >
          <TbReplaceFilled />
        </NavLink>
        <NavLink
          to="/Group"
          className={`text-3xl ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          <MdGroups />
        </NavLink>
        <NavLink
          to="/Gaming"
          className={`text-3xl ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          <FaGamepad />
        </NavLink>
      </div>

      <div className="flex justify-center items-center gap-5">
        <NavLink
          to="/Menu"
          className={`text-3xl ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          <CgMenuGridR />
        </NavLink>
        <NavLink
          to="/Chat"
          className={`text-3xl ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          <RiWechatPayFill />
        </NavLink>
        <NavLink
          to="/Notifications"
          className={`text-3xl ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          <IoNotifications />
        </NavLink>
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
      </div>
    </div>
  );
};

export default Navbar;
