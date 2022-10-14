import React from "react";
import "./Post.css";
import postImg1 from "../../assets/europe.jpg";

const Post = () => {
  return (
    <div className="postWrapper">
      <div
        className="postImage"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0)), url(${postImg1}) `,
        }}
      >
        <h5 className="postImgHead">Javascript mastery</h5>
        <h6 className="postImgTime">2 hours ago</h6>
      </div>

      <div className="postText">
        <div className="postHashTags">
          <span>#dubrovnik</span>
          <span>#croatia</span>
          <span>#europe</span>
        </div>
        <h2 className="postTextHead">Dubrovnik</h2>
        <p className="postTextPara">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia id
          debitis similique magnam perferendis. placeat aspernatur...
        </p>
        <div className="postLike">
          <i class="fa fa-thumbs-up" aria-hidden="true"></i> 1 Like
        </div>
      </div>
    </div>
  );
};

export default Post;
