
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/refex">Refex Component</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
