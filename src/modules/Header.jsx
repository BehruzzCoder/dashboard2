import React from "react";
import { useLocation } from "react-router-dom";
import { navList } from "../hooks/paths";

const Header = () => {
  const { pathname } = useLocation();
  const current = navList.find((item) => item.path === pathname);

  return (
    <div className="flex items-center justify-between mb-[58px]">
      <strong className="font-bold text-[24px] text-[#252733]">
        {current ? current.title : "Page"}
      </strong>
      <div></div>
    </div>
  );
};

export default Header;
