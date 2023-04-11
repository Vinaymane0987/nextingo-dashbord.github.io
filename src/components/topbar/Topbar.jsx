import React from "react";
import "./topbar.scss";
import {
  Search,
  LanguageOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  ListAltOutlined,
} from "@mui/icons-material";
import vinay from '../../assests/logo.png'
import { Avatar } from "@mui/material";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <Search />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="topbaricons"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="topbaricons"/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className="topbaricons"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="topbaricons"/>
            <div className="item__msg">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="topbaricons"/>
            <div className="item__msg">2</div>
          </div>
          <div className="item">
            <ListAltOutlined className="topbaricons"/>
          </div>
          <div className="item">
            <Avatar src={vinay}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
