import React from "react";
import ProductGallery from "../Gallery";
import ProductSummary from "../Summary";

const MainInfo = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-8 rounded p-8 bg-white">
      <ProductGallery />
      <ProductSummary />
    </div>
  );
};

export default MainInfo;
