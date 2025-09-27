import { NavLink } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/basic-form">Basic Form</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar