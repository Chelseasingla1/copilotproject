import "./Header.css";
import { useNavigate, Link, Outlet } from "react-router-dom";
const NavPost = () => {
    return ( 
    <nav className="header">
    <Link to="/postpage/findquestion">FindQuestion</Link>
    <Link to="/postpage/article">Article</Link>
    <Link to="/postpage/questionform">Question Form</Link>
    
  </nav> );
}
 
export default NavPost;