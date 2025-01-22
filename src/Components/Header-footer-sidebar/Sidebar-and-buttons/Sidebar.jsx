import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

const SideBar = ({ selectedTab, setSelectedTab }) => {
  const [isSideBarVisible, setSideBarVisible] = useState(false);
  return (
    <>
    {/* sideBar button for mobile web veiw */}
    <button className="btn btn-dark d-md-none d-none"
    onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
<AiOutlineMenu />
    </button>
      <div
        className={`sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark fs-5 align-items-stretch h-100 fixed-top ${
          isSideBarVisible && "show"
        }`}
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Social Media</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item"
            onClick={() => {
              console.log("Clicked");
              setSelectedTab("Home");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Home" && "active"
              }`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              <AiFillHome /> Home
            </a>
          </li>
          <li
            onClick={() => {
              console.log("Clicked");
              setSelectedTab("Explore");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Explore" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              <MdOutlineExplore /> Explore
            </a>
          </li>
          <li
            onClick={() => {
              console.log("Clicked");
              setSelectedTab("Create");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Create" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              <FiPlusCircle /> Create
            </a>
          </li>
          <li
            onClick={() => {
              console.log("Clicked");
              setSelectedTab("Notification");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Notification" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              <IoIosNotifications /> Notification
            </a>
          </li>
          <li
            onClick={() => {
              console.log("Clicked");
              setSelectedTab("Settings");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Settings" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <IoSettingsOutline /> Settings
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="./Public/Profile.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Person</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default SideBar;
