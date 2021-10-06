import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

function NavBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="nav">
      <div className="topLeft">
        <i className="topIcon green fab fa-jedi-order">
          <a
            className="link leftLink"
            href="https://starwars.fandom.com/wiki/Main_Page"
            target="_blank"
            rel="noreferrer"
          >
            Wookiepedia
          </a>
        </i>
        <i className="topIcon red fab fa-galactic-senate">
          <a
            className="link leftLink"
            href="http://www.rebelscum.com/"
            target="_blank"
            rel="noreferrer"
          >
            RebelScum
          </a>
        </i>
        <i className="topIcon blue fab fa-old-republic">
          <a
            className="link leftLink"
            href="https://www.starwarsnewsnet.com/"
            target="_blank"
            rel="noreferrer"
          >
            SWNewsNet
          </a>
        </i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          {/* <li className="topListItem">
            <Link className="link" to="/">
              About Us 
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li> */}
          <li className="topListItem">
            <Link className="link" to="/create">
              Create Blog
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImage" src={user.profilePic} alt=""></img>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default NavBar;
