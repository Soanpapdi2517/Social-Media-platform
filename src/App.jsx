import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header-footer-sidebar/Header-and-buttons/Header";
import Footer from "./Components/Header-footer-sidebar/Footer";
import SideBar from "./Components/Header-footer-sidebar/Sidebar-and-buttons/Sidebar";
import CreatePost from "./Components/Header-footer-sidebar/Sidebar-and-buttons/Create/CreatePost";
import PostList from "./Components/Header-footer-sidebar/Sidebar-and-buttons/feedContents/PostList";
import { useState } from "react";
import Explore from "./Components/Header-footer-sidebar/Sidebar-and-buttons/Explore/Explore";
import Settings from "./Components/Header-footer-sidebar//Sidebar-and-buttons/Settings/Settings";
import Login from "./Components/Header-footer-sidebar/Header-and-buttons/Login-SignUp/Login";
import Signup from "./Components/Header-footer-sidebar/Header-and-buttons/Login-SignUp/Signup";
import MessageList from "./Components/Header-footer-sidebar/Header-and-buttons/Messages/MessagesList";
import RequestContainer from "./Components/Header-footer-sidebar/Header-and-buttons/FriendReq/RequestContainer";
import NotificationList from "./Components/Header-footer-sidebar/Sidebar-and-buttons/Notification/NotificationList";
import PostListProvider from "./Components/store/postList-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          z
        ></SideBar>
        <div className="app-content">
          <Header
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : selectedTab === "Create" ? (
            <CreatePost></CreatePost>
          ) : selectedTab === "Explore" ? (
            <Explore></Explore>
          ) : selectedTab === "Notification" ? (
            <NotificationList></NotificationList>
          ) : selectedTab === "Settings" ? (
            <Settings></Settings>
          ) : selectedTab === "Messages" ? (
            <MessageList></MessageList>
          ) : selectedTab === "Friends" ? (
            <RequestContainer></RequestContainer>
          ) : selectedTab === "Login" ? (
            <Login></Login>
          ) : (
            <Signup></Signup>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
