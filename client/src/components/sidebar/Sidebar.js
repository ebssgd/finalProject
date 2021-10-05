import "./sidebar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import yoda from "../../images/SWYodaWithLightsabre.jpg";

function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const response = await axios.get("/categories");
      setCats(response.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Us</span>
        <img src={yoda} alt="Yoda" width="220px" height="100px" />
        <p>
          Lucas ipsum dolor sit amet mimbanite saurin elrood dagobah darth even
          mon cal ree-yees quermian.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((category) => {
            <Link to={`/?cats=${category.name}`} className="link">
              <li className="sidebarListItem">{category.name}</li>
            </Link>;
          })}
        </ul>
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
