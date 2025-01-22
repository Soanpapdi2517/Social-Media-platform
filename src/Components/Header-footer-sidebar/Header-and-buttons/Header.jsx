import { AiFillHome } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { LuActivity } from "react-icons/lu";
import { AiOutlineMenu } from "react-icons/ai";
import { useRef } from "react";

const Header = ({ selectedTab, setSelectedTab }) => {
  const headerRef = useRef(null);

  const toggleHeaderVisibility = () => {
    if (headerRef.current) {
      headerRef.current.classList.toggle("hidden");
      headerRef.current.classList.toggle("d-none");

    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="btn btn-primary d-md-none m-3 position-absolute z-2"
        onClick={toggleHeaderVisibility}
      >
        <AiOutlineMenu size={24} />
      </button>

      {/* Header */}
      <header
        ref={headerRef}
        className="p-3 text-bg-dark header"
        style={{ display: "inline-block" }} // Initially displayed
      >
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="col-12 col-lg-auto mb-2 justify-content-center mb-md-0 ps-8 nav-container">
              <li onClick={() => setSelectedTab("Home")}>
                <a
                  href="#"
                  className={`nav-link px-5 fs-4 ${
                    selectedTab === "Home" ? "text-Secondary" : "text-white"
                  }`}
                >
                  <AiFillHome />
                </a>
              </li>
              <li onClick={() => setSelectedTab("Messages")}>
                <a
                  href="#"
                  className={`nav-link px-5 fs-4 ${
                    selectedTab === "Messages" ? "text-Secondary" : "text-white"
                  }`}
                >
                  <TbMessages />
                </a>
              </li>
              <li onClick={() => setSelectedTab("Friends")}>
                <a
                  href="#"
                  className={`nav-link px-5 fs-4 ${
                    selectedTab === "Friends" ? "text-Secondary" : "text-white"
                  }`}
                >
                  <FaUserFriends />
                </a>
              </li>
              <li onClick={() => setSelectedTab("Activity")}>
                <a
                  href="#"
                  className={`nav-link px-5 fs-4 ${
                    selectedTab === "Activity" ? "text-Secondary" : "text-white"
                  }`}
                >
                  <LuActivity />
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 Search"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark text-lime-50"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end login-signup Buttons">
              <button
                type="button"
                className={`btn btn-outline-light me-2`}
                onClick={() => setSelectedTab("Login")}
              >
                Login
              </button>
              <button
                type="button"
                className={`btn btn-warning`}
                onClick={() => setSelectedTab("Signup")}
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
