/*The component where we are putting this header i.e. the Body, that file does not have this header so we need to export it from here and then import it there just like we did with react*/
import { LOGO_URL } from "../utils/constants";

 
 const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;