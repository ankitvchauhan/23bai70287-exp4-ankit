import { Link } from "react-router-dom";
import ThemeToggle from "./themetoggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/analytics">Analytics</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;