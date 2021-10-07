import "./post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.postPhoto && (
        <img className="postImage" src={PF + post.postPhoto} alt="" />
      )}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((cat) => {
            return <span className="postCategory">{cat.name}</span>;
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
