import React from "react";
import "./Navbar.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Message from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>

      <Link to="../chat">
        <img src={Message} alt="" />
      </Link>
      <img src={Noti} alt="" />
      <UilSetting />
    </div>
  );
};

export default Navbar;
