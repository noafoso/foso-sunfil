import React from "react";
import SidebarFilter from "../SidebarFilter";
import ProductSection from "../ProductSection";

const MainContent = () => {
  return (
    <div className="flex gap-5">
      <SidebarFilter />
      <ProductSection />
    </div>
  );
};

export default MainContent;
