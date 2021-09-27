import OnePost from "../../components/onePost/OnePost";
import Sidebar from "../../components/sidebar/Sidebar";
import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <OnePost />
      <Sidebar />
    </div>
  );
}

export default SinglePost;
