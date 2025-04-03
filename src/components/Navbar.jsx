import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <FaCode className='coder-icon' />

      <h1>
        Omadbek Odilov
      </h1>

      <div className="nav-box">

        <a target='_blank' href="https://www.instagram.com/khusanboevich.08/"><FaInstagram className='icon-instagram' /></a>
        <a target='_blank' href="https://t.me/omadbek080808">< FaTelegram className='icon-telegram' /></a>

      </div>

    </nav>
  )
}

export default Navbar
