import "./create.css";

function Create() {
  return (
    <div className="create">
      <img
        className="createImage"
        src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2018/05/portrait-lighting-landscape-photography-dps-6.jpg?resize=750%2C499&ssl=1"
        alt="Pretty Landscape"
      />
      <form className="createForm">
        <div className="createFormGroup">
          <label htmlFor="fileInput">
            <i className="createIcon fas fa-plus-circle"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="createInput"
            autoFocus={true}
          />
        </div>
        <div className="createFormGroup">
          <textarea
            placeholder="What's on your mind..."
            type="text"
            className="createInput createText"
          ></textarea>
        </div>
        <button className="createSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Create;
