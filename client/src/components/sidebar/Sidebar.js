import "./sidebar.css";
import yoda from "../../images/SWYodaWithLightsabre.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Us</span>
        <img src={yoda} alt="Yoda" width="220px" height="100px" />
        <p>
          We are Star Wars fans. Obviously. We want to share our fandom with
          anyone who would like to learn more about and of the movie series’ or
          any other media type that Star Wars exists in, which is pretty much
          all of them. We hope you will join us!
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Other great sites: </span>
        <div className="sidebarLinks">
          <i className="topIcon green fab fa-jedi-order">
            <a
              className="link sidebarLinkItem"
              href="https://starwars.fandom.com/wiki/Main_Page"
              target="_blank"
              rel="noreferrer"
            >
              Wookiepedia
            </a>
          </i>
          <i className="topIcon red fab fa-galactic-senate">
            <a
              className="link sidebarLinkItem"
              href="http://www.rebelscum.com/"
              target="_blank"
              rel="noreferrer"
            >
              RebelScum
            </a>
          </i>
          <i className="topIcon blue fab fa-old-republic">
            <a
              className="link sidebarLinkItem"
              href="https://www.starwarsnewsnet.com/"
              target="_blank"
              rel="noreferrer"
            >
              SWNewsNet
            </a>
          </i>
          <i className="topIcon green fab fa-galactic-republic">
            <a
              className="link sidebarLinkItem"
              href="https://www.starwarsunderworld.com/"
              target="_blank"
              rel="noreferrer"
            >
              SWUnderworld
            </a>
          </i>
          <i className="topIcon red fas fa-journal-whills">
            <a
              className="link sidebarLinkItem"
              href="http://www.starwarsreport.com/"
              target="_blank"
              rel="noreferrer"
            >
              Star Wars Report
            </a>
          </i>
          <i className="topIcon blue fas fa-jedi">
            <a
              className="link sidebarLinkItem"
              href="https://www.jedinews.com/"
              target="_blank"
              rel="noreferrer"
            >
              Jedi News
            </a>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
