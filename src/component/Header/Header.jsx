import React, { useState } from "react";
import "./header.css";
import logo from "../../img/Logo.png";
import { Link } from "react-router-dom";
import notification from "../../img/notification.png";
import headerAvatar from "../../img/headerAvatar.png";
import editAccount from "../../img/editAccount.png";
import avatarAccount from "../../img/avatarPatient.png";
import logoutImg from "../../img/logout.png";
import { menu } from "./menuList";
import { useDispatch } from 'react-redux';
import { authLogout } from './../../api/doctor/AuthDoctor'
import { useSelector } from 'react-redux';
import Spinner from './../Spin/Spinner';
import { useNavigate } from "react-router-dom";



export default function Header({menuList, account, doctorMenu}) {
  const [activePage, setActivePage] = useState(0)
  const [isShowAccount , setIsShowAccount] = useState(false)
  const handlePage =(index)=>{
     setActivePage(index)
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = ()=>{
    authLogout(dispatch)
    navigate('/auth')
    
  }
  const isLoading  = useSelector(state => state.appoinment.isLoading)
  const getMedFileLoading = useSelector(state=>state.medFile.getMedFileId.isLoading)

  return (
    <header className="header">
    {getMedFileLoading && 
        <div className="calendar-month_grid__wrapper">
            <Spinner size='44px'/>
        </div>
        }
     {isLoading && 
        <div className="calendar-month_grid__wrapper">
        {/* <div class="loaderr"></div> */}
            <Spinner size='44px'/>
        </div>
        }
     <div className="header__content">
     <div className="header_logo">
        <img src={logo} alt="" className="logo" />
        <p className="header_logo-title">Беременность</p>
      </div>
      <ul className={doctorMenu ? "header__nav header__nav__doctor" : "header__nav"}>
      {
        menuList.map((item,idx)=>(
          <li key={item.path} onClick={()=>handlePage(idx)}>
           <Link to={item.path} className={idx===activePage?'active-page':'page-link'}>{item.text}</Link>
          </li>
        ))
      }
      </ul>
      <div className="account">
      
        <img src={notification} alt="" />
        <img src={headerAvatar} alt="" onClick={()=>setIsShowAccount(!isShowAccount)} />
           <div className={isShowAccount?"account__block active" :"account__block" }>
              <div className="account__block__header">
                {account.experience ? 'Доктор' : "Супер админ"}
                <img src={editAccount} alt="" className="account__block__header__img"/>
                <img src={headerAvatar} alt="" className="account__block__header__avatar"/>
              </div>
              <div className="account__block__middle">
                <p> {account.firstName} {account.lastName}</p> 
                <p> {account.email}</p>
              </div>
              <div onClick={logout} className='logout'>
              <img src={logoutImg} alt="" className=""/>
                Выйти
              </div>
           </div>
        
      </div>
     </div>
      
    </header>
  );
}
