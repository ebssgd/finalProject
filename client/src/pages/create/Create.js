import "./create.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.postPhoto = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      console.log(res.data);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="create">
      {file && (
        <img className="createImage" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="createForm" onSubmit={handleSubmit}>
        <div className="createFormGroup">
          <label htmlFor="fileInput">
            <i className="createIcon fas fa-plus-circle"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="createInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="createFormGroup">
          <textarea
            placeholder="What's on your mind..."
            type="text"
            className="createInput createText"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="createSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Create;
