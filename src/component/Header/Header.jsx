import React, { useState } from "react";
import "./header.css";
import logo from "../../img/Logo.png";
import { Link } from "react-router-dom";
import notification from "../../img/notification.png";
import headerAvatar from "../../img/headerAvatar.png";
import { menu } from "./menuList";
export default function Header() {
  const [activePage, setActivePage] = useState(0)
  const handlePage =(index)=>{
     setActivePage(index)
  }
  return (
    <header className="header">
     <div className="header__content">
     <div className="header_logo">
        <img src={logo} alt="" className="logo" />
        <p className="header_logo-title">Беременность</p>
      </div>
      <ul className="header__nav">
      {
        menu.map((item,idx)=>(
          <li key={item.path} onClick={()=>handlePage(idx)}>
           <Link to={item.path} className={idx===activePage?'active-page':'page-link'}>{item.text}</Link>
          </li>
        ))
      }
      </ul>
      <div className="account">
        <img src={notification} alt="" />
        <img src={headerAvatar} alt="" />
      </div>
     </div>
      
    </header>
  );
}
