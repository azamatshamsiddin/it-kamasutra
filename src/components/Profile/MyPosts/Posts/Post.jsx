import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <>
      <div className={s.item}>
        <img src="https://picsum.photos/id/1/100" alt="img" />
        <p>{props.message}</p>
        <span>like {props.likesCount}</span>
      </div>
    </>
  );
};

export default Post;
