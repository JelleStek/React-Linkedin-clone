import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
            <Avatar className="sidebar__avatar"/>
            <h2>Jelle Stekelenburg</h2>
            <h4>Jelle@nwave.nl</h4>
        </div>
        <div className="sidebar__stats">
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,522</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on posts</p>
                <p className='sidebar__statNumber'>2,602</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar