import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({
  signOut,
  loadMyBookings,
  user
}) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link to="/bookings" className="nav__link">Visa tillgängliga rum</Link></li>
        <li className="nav__item"><Link to="/mybookings" className="nav__link">Mina bokningar</Link></li>
        <li className="nav__item"><a onClick={signOut} className="nav__link">Logga ut</a></li>
      </ul>
    </nav>
  )
}

export default NavBar