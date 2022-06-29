import React from "react";
import "./Navbar.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Message from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";

const Navbar = () => {
  return (
    <div className="navIcons">
      <img src={Home} alt="" />
      <img src={Message} alt="" />
      <img src={Noti} alt="" />
      <UilSetting />
    </div>
  );
};

export default Navbar;
