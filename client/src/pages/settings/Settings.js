import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

function Settings() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:5000/images/";

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const response = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: response.data });
    } catch (err) {
      //console.log(err.response.data);
      dispatch({ type: "BAD_UPDATE" });
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
        </div>
        <form className="settingsForm" onSubmit={handleUpdateUser}>
          <label>Profile Picture</label>
          <div className="settingsProfilePic">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPicIcon fas fa-user-ninja"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </div>
          <label className="settingsFormLabel">Username</label>
          <input
            type="text"
            placeholder="New Username"
            onChange={(e) => {
              if (e.target.value) {
                setUsername(e.target.value);
              }
            }}
          />
          <label className="settingsFormLabel">Email</label>
          <input
            type="email"
            placeholder="New Email"
            onChange={(e) => {
              if (e.target.value) {
                setEmail(e.target.value);
              }
            }}
          />
          <label className="settingsFormLabel">Password</label>
          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => {
              if (e.target.value) {
                setPassword(e.target.value);
              }
            }}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span className="successUpdate">Profile has been updated</span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
