import "./post.css";
import { Link } from "react-router-dom";
import luke from "../../images/SWLuke.jpeg";

function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img className="postImage" src={luke} alt="Skywalker" />}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((cat) => {
            <span className="postCategory">{cat.name}</span>;
          })}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.description}</p>
    </div>
  );
}

export default Post;
