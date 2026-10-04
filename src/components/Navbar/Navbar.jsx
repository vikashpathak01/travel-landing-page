import { MdArrowDropDown } from "react-icons/md";
import "./Navbar.css";
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Jadoo</div>
        <ul className="navbar-links">
          <li>Desitinations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
          <li>Login</li>
          <li>Sign up</li>
          <li className="navbar-select">
            EN <MdArrowDropDown size={35} />
          </li>
        </ul>

        <div className="hamburger" onClick={() => setClicked(!clicked)}>
          {clicked ? <X size={23} /> : <Menu size={23} />}
        </div>
      </div>
      {clicked && (
      
          <div className="mobile-menu">
            <div>Destinations</div>
            <div>Hotels</div>
            <div>Flights</div>
            <div>Bookings</div>
            <div>Login</div>
            <div>Sign up</div>
            <div>EN</div>
          </div>
    
      )}
    </div>
  );
};

export default Navbar;
