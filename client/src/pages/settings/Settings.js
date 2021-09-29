import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePic">
            <img
              src="https://i.redd.it/v0caqchbtn741.jpg"
              alt="Mike is everyone"
            />
            <label htmlFor="fileInput">
              <i className="settingsPicIcon fas fa-user-ninja"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            ></input>
          </div>
          <label className="settingsFormLabel">Username</label>
          <input type="text" placeholder="Bryan" />
          <label className="settingsFormLabel">Email</label>
          <input type="email" placeholder="bryan@whatever.com" />
          <label className="settingsFormLabel">Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
