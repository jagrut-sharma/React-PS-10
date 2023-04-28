import { NavLink } from "react-router-dom";

export default function Header() {
  const getClassName = ({ isActive }) => {
    return isActive ? "link active-link" : "link";
  };

  return (
    <>
      <nav>
        <NavLink className={getClassName} to="/">
          Inbox
        </NavLink>{" "}
        ||{" "}
        <NavLink className={getClassName} to="/spam">
          Spam
        </NavLink>{" "}
        ||{" "}
        <NavLink className={getClassName} to="/trash">
          Trash
        </NavLink>
      </nav>
    </>
  );
}
