import "./header.css";
import allMovies from "../../images/SWAllMovies.jpeg";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Star Wars</span>
        <span className="headerTitleLg">A New Blog</span>
      </div>
      <img
        className="headerImage"
        src={allMovies}
        alt="All Movies"
        height="200px"
        width="400px"
      />
    </div>
  );
}

export default Header;
