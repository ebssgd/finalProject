import "./navbar.css";

function NavBar() {
  return (
    <div className="nav">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-reddit"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About Us</li>
          <li className="topListItem">Contacts</li>
          <li className="topListItem">New Blog</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImage"
          src="https://i.redd.it/v0caqchbtn741.jpg"
          alt="Profile Pic"
        ></img>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default NavBar;
