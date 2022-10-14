import React from "react";
import "./PostData.css";
import europeDetail from "../../../assets/europeDetail.jpg";

const PostData = () => {
  return (
    <div className="row">
      <div className="col-md-6 ps-4">
        <h1 className="postDHead">Dubrovnik</h1>
        <div className="postDHashTags">
          <span>#dubrovik</span>
          <span>#croatia</span>
          <span>#europe</span>
        </div>
        <p className="postDTextPara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro
          aspernatur sapiente optio nisi laboriosam laborum exercitationem
          cumque, ex maiores?
        </p>
        <h3 className="postDAuthor">
          <span>Created by:</span> Abdullah Zia
        </h3>
        <h5 className="postDImgTime">2 hours ago</h5>
      </div>
      <div className="col-md-6">
        <img src={europeDetail} className="container-fluid" alt="" />
      </div>
    </div>
  );
};

export default PostData;
