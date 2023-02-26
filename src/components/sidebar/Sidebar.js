import React from "react";

import { Outlet, NavLink } from "react-router-dom";
import "./Sidebar.css";

import Dashboard from "../../pages/dashboard/Dashboard";
import Home from "../../pages/home/Home"
import logo from "../../assets/images/logo.jpg";
import Settings from "../../pages/settings/Settings";
import Support from "../../pages/support/Support";
import Profile from "../../pages/profile/Profile"
import Messages from "../../pages/messages/Messages"
import Connection from "../../pages/connection/Connection";
import Integration from "../../pages/integration/Integration"
import Promotion from "../../pages/promotion/Promotion"

const Sidebar = ({ children }) => {

  return (
    <div className="container">
      <div className="mobile-container">
        <NavLink to="/" key={<Home />} className="mobile-link ">
            <div className="icon">
              <span class="material-symbols-outlined">home</span>
            </div>
            <div className="mobile-link_text">
              <p>Home</p>
            </div>
        </NavLink>
        <NavLink to="/dashboard" key={<Dashboard />} className="mobile-link ">
            <div className="icon">
              <span class="material-symbols-outlined">grid_view</span>
            </div>
            <div className="mobile-link_text">
              <p>Dashboard</p>
            </div>
        </NavLink>
        <NavLink to="/profile" key={<Profile />} className="mobile-link ">
            <div className="icon">
              <span class="material-symbols-outlined">person</span>  
            </div>
            <div className="mobile-link_text">
              <p>Profile</p>
            </div>
        </NavLink>
        <NavLink to="/messages" key={<Messages />} className="mobile-link ">
            <div className="icon">
              <span class="material-symbols-outlined">chat_bubble</span>  
            </div>
            <div className="mobile-link_text">
              <p>Messages</p>
            </div>
        </NavLink>
        <NavLink to="/more" key={<Messages />} className="mobile-link ">
            <div className="icon">
              <span class="material-symbols-outlined">menu</span>
            </div>
            <div className="mobile-link_text">
              <p>More</p>
            </div>
        </NavLink>
        
      </div>
      <div className="sidebar">
        <div className="top_section">
            <div className="logoo">
                <img src={logo} alt="Logo" className="logo"/>
            </div>
            <div className="">
              <div className="searchbar">
                <input type="text" placeholder="Search"/>
              </div>
                <NavLink to="/" key={<Home />} className="link ">
                    <div className="icon">
                    <span class="material-symbols-outlined">home</span>
                      {/* <img src={HomeLogo} alt="" /> */}
                    </div>
                    <div className="link_text">
                    <p>Home</p>
                    </div>
                </NavLink>
                <NavLink to="/dashboard" key={<Dashboard />} className="link ">
                    <div className="icon">
                      <span class="material-symbols-outlined">grid_view</span>  
                    </div>
                    <div className="link_text">
                    <p>Dashboard</p>
                    </div>
                </NavLink>
                <NavLink to="/profile" key={<Profile />} className="link ">
                    <div className="icon">
                      <span class="material-symbols-outlined">person</span>  
                    </div>
                    <div className="link_text">
                    <p>Profile</p>
                    </div>
                </NavLink>
                <NavLink to="/messages" key={<Messages />} className="link ">
                    <div className="icon">
                      <span class="material-symbols-outlined">chat_bubble</span>  
                    </div>
                    <div className="link_text">
                    <p>Messages</p>
                    </div>
                </NavLink>
                <NavLink to="/connection" key={<Connection />} className="link ">
                    <div className="icon">
                      <span class="material-symbols-outlined">  group </span>
                    </div>
                    <div className="link_text">
                    <p>Connections</p>
                    </div>
                </NavLink>
                <NavLink to="/promotion" key={<Promotion />} className="link ">
                    <div className="icon">
                      <span class="material-symbols-outlined">sell</span>  
                    </div>
                    <div className="link_text">
                    <p>Promotion & Advertising</p>
                    </div>
                </NavLink>
                <NavLink to="/integration" key={<Integration />} className="link ">
                    <div className="icon">
                      <span class="material-symbols-outlined">monitoring</span>  
                    </div>
                    <div className="link_text">
                    <p>Integrations</p>
                    </div>
                </NavLink>
        
            </div>
        </div>
        <div className="bottom_section">

        <NavLink to="/support" key={<Support />} className="link ">
            <div className="icon">
              <span class="material-symbols-outlined">headphones</span>  
            </div>
            <div className="link_text">
              <p>Support</p>
            </div>
        </NavLink>
        <NavLink to="/settings" key={<Settings />} className="link ">
            <div className="icon">
              <span class="material-symbols-outlined">settings</span>  
            </div>
            <div className="link_text">
              <p>Settings</p>
            </div>
        </NavLink>
        <div className="lower-profile">
          <div className="image">
            <div className="inner-image">  </div>
          </div>
          <div className="desc">
            <div className="name-logo">
              <div className="name">
                <p>Olivia Rhye</p>
              </div>
              <div className="logout-logo">
                <span class="material-symbols-outlined">logout</span>
              </div>
            </div>
            <div className="email">
              <p>olivia@untitledui.com</p>
            </div>
          </div>
        </div>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
