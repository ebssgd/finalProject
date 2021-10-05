import Post from "../post/Post";
import "./posts.css";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((eachPost) => (
        <Post post={eachPost} />
      ))}
    </div>
  );
}

export default Posts;
