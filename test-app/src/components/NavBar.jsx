import { NavLink } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/form-level-validation">Form Level Validation</NavLink>
          </li>
        <li>
          <NavLink to="/field-level-validation">Field Level Validation</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar