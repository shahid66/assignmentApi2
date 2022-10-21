import React from 'react'
import { Link } from 'react-router-dom'
import { getUserDetails } from '../../helper/SessionHelper'
import './topnav.css'
const TopNav = () => {
  return (
    <div className='top__nav'>
      <div className="top__nav-wrapper">
        <div className="search__box">
          <input type="text" placeholder='search or type'/>
          <span><i class="ri-search-line"></i></span>
        </div>
        <div className="top__nav-right">
          <span className='notification'><i class="ri-notification-2-line"></i> <span className='badge'>1</span></span>
          <div className="profile">
            <Link to='/setting'><img src={getUserDetails().photo} alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav
