import React from 'react'
import { NavLink } from 'react-router-dom'
import navLinks from '../../assets/dummy-data/navLinks'
import { getLogOut } from '../../helper/SessionHelper'

import './sidebar.css'

const Sidebar = () => {
  const LogOut=()=>{
    console.log('j')
    getLogOut()
    window.location.href="/"
  }
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <h2><span><i class="ri-taxi-line"></i></span>Task Manager</h2>
      </div>
      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item,index)=>(
             <li className='nav__item' key={index}>
               <NavLink to={item.path} className={navClass=>navClass.isActive ? 'nav__active nav__link': 'nav__link'}><i className={item.icon}></i>{item.display} </NavLink>
             </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__bottom">
          <span onClick={LogOut}><i  class="ri-logout-circle-line"></i>Log Out</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
