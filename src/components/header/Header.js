import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImage"
        src="https://www.colesclassroom.com/wp-content/uploads/2018/12/pexels-photo-443446.jpeg"
        alt="Pretty Lake"
      />
    </div>
  );
}

export default Header;
