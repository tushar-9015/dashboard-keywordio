import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div className='nav'>
      <div className='nav-container'>
        <div className='nav-container__left'>
          <div className='logo'>APP LOGO</div>
        </div>
        <div className='nav-container__right'>
          <Link to='/' className='link'><div>DASHBOARD</div></Link>
          <Link to='/create' className='link'><div>CREATE ADS</div></Link>
        </div>
      </div>
    </div>
  )
}

export default Header