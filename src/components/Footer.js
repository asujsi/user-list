import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" && (
        <footer>
          <p>Copyright &copy; 2022</p>
          <Link to="/about">About</Link>
        </footer>
      )}
    </div>
  );
};

export default Footer;
