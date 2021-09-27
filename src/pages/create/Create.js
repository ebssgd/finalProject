import "./create.css";

function Create() {
  return (
    <div className="create">
      <form className="createForm">
        <div className="createFromGroup">
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
