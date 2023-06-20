import { useState } from "react";

function HambugerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClickHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu-container my-1 w-8 " onClick={menuClickHandler}>
      <div
        className={`h-0.5 w-full rounded-md bg-slate-200  ${
          menuOpen
            ? "origin-top-left rotate-40 duration-500"
            : "rotate-0 duration-500"
        }`}
      ></div>
      <div
        className={`my-2 h-0.5 w-full rounded-md bg-slate-200
      ${
        menuOpen ? "bg-transparent duration-300 " : "bg-slate-200 duration-300"
      } `}
      ></div>
      <div
        className={`h-0.5 w-full rounded-md bg-slate-200  ${
          menuOpen
            ? "origin-bottom-left -rotate-40 duration-500"
            : "rotate-0 duration-500"
        }`}
      ></div>
    </div>
  );
}

export default HambugerMenu;
