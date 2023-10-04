
import './Nevbar.css';
import React,{ useState} from 'react'
import { Link } from 'react-router-dom'
import {MenuOutlined} from '@ant-design/icons'

function Nevbar() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div>
      <nav>
      <Link to={'/'}><h1 className='title'>Holiday</h1></Link>
      <div className='menu' id='myTopnav' onClick={()=>{setMenuOpen(!menuOpen)}}>
       {/* <MenuOutlined  className='manu0-icon'/> */}
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </div>
        <ul className={menuOpen?'open':''}>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/flights'}>Flights</Link>
          </li>
          <li>
          <Link to={'/packages'}>Package</Link>
          </li>
          <li>
          <Link to={'/about'}>About us</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li>
            <Link to={'/book-now'}><button className='button-nev'>Book Now</button></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nevbar
