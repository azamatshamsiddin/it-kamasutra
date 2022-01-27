import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <main className={s.main}>
        <div className="main-header">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7YyasYGZnpjhxWhoiiPcqvEQYRVG8GObcg&usqp=CAU"
            width={700}
            alt="main-img"
            className={s.main__img}
          />
        </div>
        <div className={s.main__author}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQUH4kyrj7s-FshLbHtjJgoNGtKhrocOnlIQ&usqp=CAU"
            width={90}
            alt="cat-img"
            className={s.author__img}
          />
        </div>
        <MyPosts />
      </main>
    </>
  );
};

export default Profile;
