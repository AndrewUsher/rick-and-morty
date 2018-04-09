import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <h1>Mortypedia</h1>
      <nav>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/characters" exact activeClassName="active">
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/locations" exact activeClassName="active">
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink to="/episodes" exact activeClassName="active">
            Episodes
          </NavLink>
        </li>
      </nav>
    </header>
  )
}

export default Navbar
