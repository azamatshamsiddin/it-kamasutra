import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <>
      <div className={s.main__content}>
        my posts
        <div className={s.new__post}>
          <textarea name="newPost" placeholder="Create a new post!"></textarea>
          <button type="button">Create</button>
        </div>
        <div className={s.posts}>
          <Post message="Hi, this is my first post" likesCount="12" />
          <Post message="Second!!!" likesCount="4" />
        </div>
      </div>
    </>
  );
};

export default MyPosts;
