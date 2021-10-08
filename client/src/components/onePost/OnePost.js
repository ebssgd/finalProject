import "./onePost.css";
import { useLocation } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

function OnePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(`/posts/${path}`);
      //console.log(response);
      setPost(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description,
      });
      setUpdate(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="onePost">
      <div className="onePostWrapper">
        {post.postPhoto && (
          <img className="onePostImage" src={PF + post.postPhoto} alt="" />
        )}
        {update ? (
          <input
            type="text"
            value={title}
            className="onePostTitleUpdate"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="onePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="onePostEdit">
                <i
                  className="onePostIcon fas fa-undo"
                  onClick={() => setUpdate(true)}
                ></i>
                <i
                  className="onePostIcon fas fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="onePostInfo">
          <span className="onePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="onePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {update ? (
          <textarea
            className="onePostDescriptionUpdate"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="onePostDescription">{description}</p>
        )}
        {update && (
          <button className="editPostBtn" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default OnePost;
