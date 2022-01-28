import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

import s from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <main className={s.main}>
        <ProfileInfo />
        <MyPosts />
      </main>
    </>
  );
};

export default Profile;
