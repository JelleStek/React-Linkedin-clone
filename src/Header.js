import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className="header">

        <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
          <div className="header__search">
            <SearchIcon/>
            <input placeholder="Search" type="text" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4D03AQE4L004FgqMAg/profile-displayphoto-shrink_800_800/0/1620256686817?e=1651708800&v=beta&t=nymJrBCeEdoip_RTHb-A6NngmY-fvmH4kE4qRghkyJE" title="me" />
        </div>
    </div>
  )
}

export default Header