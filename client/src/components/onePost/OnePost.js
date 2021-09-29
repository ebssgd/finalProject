import "./onePost.css";

function OnePost() {
  return (
    <div className="onePost">
      <div className="onePostWrapper">
        <img
          className="onePostImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLYBQD-bBkpEU1dGCa2TU_J8Q9nI1tzd1WA&usqp=CAU"
          alt="Rock in Water"
        />
        <h1 className="onePostTitle">
          This is just a random test title
          <div className="onePostEdit">
            <i className="onePostIcon fas fa-undo"></i>
            <i className="onePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="onePostInfo">
          <span className="onePostAuthor">
            Author: <b>Bryan</b>
          </span>
          <span className="onePostDate">1 hour ago</span>
        </div>
        <p className="onePostDescription">
          Random loren ipsum text blah, blah, blah Random loren ipsum text blah,
          blah, blah Random loren ipsum text blah, blah, blah Random loren ipsum
          text blah, blah, blah Random loren ipsum text blah, blah, blah Random
          loren ipsum text blah, blah, blah Random loren ipsum text blah, blah,
          blah Random loren ipsum text blah, blah, blah Random loren ipsum text
          blah, blah, blah Random loren ipsum text blah, blah, blah Random loren
          ipsum text blah, blah, blah Random loren ipsum text blah, blah, blah
          Random loren ipsum text blah, blah, blah Random loren ipsum text blah,
          blah, blah Random loren ipsum text blah, blah, blah Random loren ipsum
          text blah, blah, blah Random loren ipsum text blah, blah, blah Random
          loren ipsum text blah, blah, blah Random loren ipsum text blah, blah,
          blah Random loren ipsum text blah, blah, blah Random loren ipsum text
          blah, blah, blah Random loren ipsum text blah, blah, blah Random loren
          ipsum text blah, blah, blah Random loren ipsum text blah, blah, blah
          Random loren ipsum text blah, blah, blah Random loren ipsum text blah,
          blah, blah Random loren ipsum text blah, blah, blah Random loren ipsum
          text blah, blah, blah Random loren ipsum text blah, blah, blah Random
          loren ipsum text blah, blah, blah Random loren ipsum text blah, blah,
          blah Random loren ipsum text blah, blah, blah Random loren ipsum text
          blah, blah, blah Random loren ipsum text blah, blah, blah Random loren
          ipsum text blah, blah, blah Random loren ipsum text blah, blah, blah
        </p>
      </div>
    </div>
  );
}

export default OnePost;
