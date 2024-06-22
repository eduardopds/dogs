import React from "react";
import UserHeader from "./UserHeader";
import { Route, Routes, useNavigate } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import NotFound from "../NotFound";
import Head from "../Helper/Head";
import { useSelector } from "react-redux";

const User = () => {
  const { data } = useSelector((state) => state.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  }, [data, navigate]);

  if (!data) return null;

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
