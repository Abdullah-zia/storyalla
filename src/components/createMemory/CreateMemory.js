import React, { Fragment } from "react";
import "./CreateMemory.css";

const CreateMemory = () => {
  return (
    <Fragment>
      <form className="CreateMemoryWrapper">
        <h1 className="signupHead">Create a Story</h1>
        <div className="my-2">
          <input type="text" className="UpemailInput" placeholder="Title" />
        </div>
        <div className="my-2">
          <textarea
            className="UpemailInput"
            name=""
            id=""
            placeholder="Message"
          ></textarea>
        </div>
        <div className="my-2">
          <input type="text" className="UpemailInput" placeholder="Tags" />
        </div>
        <div className="uploadImageWrapper">
          <i class="fa fa-cloud-upload" aria-hidden="true"></i>
          <p>Upload Image</p>
        </div>
        <a href="/" className="signupBtn2">
          Submit
        </a>
        <a href="/" className="signupBtn">
          Clear
        </a>
      </form>
    </Fragment>
  );
};

export default CreateMemory;
