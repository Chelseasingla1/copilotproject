import { useState } from "react";
import PostTypeSelector from "./PostTypeSelector";
import NavPost from "./NavPost";
import { useNavigate, Link, Outlet } from "react-router-dom";

const PostPage = () => {
  const [posttype, setposttype] = useState("question");
  return (
    <>
      <NavPost/>
      
      <Outlet />
    </>
  );
};

export default PostPage;
