import { Link, NavLink } from "react-router-dom";
import '../App.css'
 
export default function Navbar() {
  return (
    <div className="flex justify-between ">
      <div className="logo text-4xl text-blue-600">
        <Link to='/'>
        logo
        </Link>
      </div>
        <nav>
            <ul className="flex gap-2">
              <li><NavLink className='py-2 px-4'  to='/'>home</NavLink></li>
              <li><NavLink className='py-2 px-4'  to='/favorites'>Favorites</NavLink></li>
              <li><NavLink className='py-2 px-4'  to='/login'>Login</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}
