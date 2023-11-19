import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Hall Booking Management</div>
      <div className="links">
        <Link to="/home">
          <button className="add-employee-button">Home</button>
        </Link>
        <Link to="/add">
          <button className="add-employee-button">Add Room</button>
        </Link>
        <Link to="/book">
          <button className="add-employee-button">Book Room</button>
        </Link>
        <Link to="/rooms">
          <button className="add-employee-button">Show Rooms</button>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
