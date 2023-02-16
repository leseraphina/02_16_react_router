import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';

import './Nav.css';

function Nav(){
  return (
<header>
  <div>
    <h1>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </h1>
    <nav>
      <ul>
        <li>
          <Link to="/list">제품</Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
  )
}
export default Nav;