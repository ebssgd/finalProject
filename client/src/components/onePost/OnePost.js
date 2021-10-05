import "./onePost.css";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import baddies from "../../images/SWVader&Emperor.jpg";
import { Link } from "react-router-dom";

function OnePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(`/posts/${path}`);
      //console.log(response);
      setPost(response.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="onePost">
      <div className="onePostWrapper">
        {post.photo && (
          <img className="onePostImage" src={baddies} alt="Vader & Emperor" />
        )}

        <h1 className="onePostTitle">
          {post.title}
          <div className="onePostEdit">
            <i className="onePostIcon fas fa-undo"></i>
            <i className="onePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="onePostInfo">
          <span className="onePostAuthor">
            Author:{" "}
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="onePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="onePostDescription">{post.description}</p>
      </div>
    </div>
  );
}

export default OnePost;
