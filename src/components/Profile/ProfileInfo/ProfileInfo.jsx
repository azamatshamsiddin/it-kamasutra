import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <>
      <div className={s.mainHeader}>
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
    </>
  );
};

export default ProfileInfo;
