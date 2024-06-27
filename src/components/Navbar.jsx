import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/'
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
            })}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/recipes'
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
            })}
          >
            All Recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
