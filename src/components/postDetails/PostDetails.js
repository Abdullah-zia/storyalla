import React, { Fragment } from "react";
import Header from "../header/Header";
import PostData from "./postData/PostData";
import "./PostDetails.css";

const PostDetails = () => {
  return (
    <Fragment>
      <Header />
      <section className="container-fluid my-5 px-4">
        <div className="row">
          <div className="col-11 mx-auto max-width py-5 PostDetailsWrapper">
            <PostData />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PostDetails;
