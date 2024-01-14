import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const RightRoutes = () => {
  return (
    <div className="w-80 h-screen overflow-y-auto p-5 static border shadow-2xl">
      <div className="flex justify-center items-center">
        <div className="">
          <h1 className="text-xl font-semibold">Sponsored</h1>
          <div className="flex items-center gap-5 mt-3">
            <NavLink
              to="/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <img
                src="https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg"
                alt=""
                className="w-56 h-20 rounded-md"
              />
            </NavLink>
            <h1 className="font-semibold">
              JavaScript is a multi-paradigm, dynamic language
              <span className="text-sm font-normal">
                <p>Drabin.com</p>
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-5 mt-3">
            <NavLink
              to="/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <img
                src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/06/What-is-CSS.jpg"
                alt=""
                className="w-56 h-20 rounded-md"
              />
            </NavLink>
            <h1 className="font-semibold">
              CSS is the acronym for Cascade Styling Sheets{" "}
              <span className="text-sm font-normal">
                <p>Mohima.com</p>
              </span>
            </h1>
          </div>

          <div className="border mt-3"></div>
          <div className="flex items-center gap-10 mt-3">
            <NavLink
              to="/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <h1 className="text-xl font-bold">Friend requests</h1>
            </NavLink>
            <h1 className=" font-semibold">See All</h1>
          </div>

          <div className="flex items-center gap-10 mt-3">
            <NavLink
              to="/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <div className="flex gap-5 items-center">
                <div>
                  {" "}
                  <img
                    src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/261944603_950077925608457_2660726067268997938_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=yvgxEfFV8CkAX89KNHx&_nc_ht=scontent.fdac157-1.fna&oh=00_AfCv1_DwzBpf48YGlFjEXFEfLLr7tOOeBa_TxpJiTtS_WQ&oe=65A699F3"
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="">
                  <h1 className=" font-bold">Drabin Paul</h1>
                  <button className=" bg-blue-700 mt-2 text-white px-5 rounded-md py-2 font-semibold">
                    Confirm
                  </button>
                </div>
                <div>
                  <h1 className=" font-semibold">5s ago</h1>
                  <h1 className=" bg-gray-400 mt-2 text-white px-5 rounded-md py-2 font-semibold">
                    Delete
                  </h1>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="border mt-3"></div>

          <div className="flex items-center justify-between mt-3">
            <NavLink
              to="/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <h1 className="text-xl font-bold">Contacts</h1>
            </NavLink>
            <div className="flex items-center gap-3 text-xl">
              <h1 className=" font-semibold">
                <IoSearchSharp />
              </h1>
              <h1 className=" font-semibold">
                <IoIosMenu />
              </h1>
            </div>
          </div>

          <div className="flex items-center mt-3 gap-5">
            <NavLink
              to="/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <img
                src="https://images.herzindagi.info/image/2022/Dec/janaki.jpg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
            </NavLink>
            <h1 className="text-xl font-semibold">Sita maiya</h1>
          </div>

          <div className="flex items-center mt-3 gap-5">
            <NavLink
              to="/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <img
                src="https://i.pinimg.com/originals/5b/e9/cd/5be9cd6c34d8de0c8324c1df2a3fd9de.jpg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
            </NavLink>
            <h1 className="text-xl font-semibold">Shree ram</h1>
          </div>

          <div className="flex items-center justify-between mt-3">
            <NavLink
              to="/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <h1 className="text-xl font-bold">Group conversations</h1>
            </NavLink>
          </div>

          <div className="flex items-center mt-3 gap-5">
            <NavLink
              to="/Profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaPlus />
            </NavLink>
            <h1 className=" font-semibold">Creat New Group</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightRoutes;
