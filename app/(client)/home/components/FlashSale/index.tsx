import Image from "next/image";
import React from "react";

const FlashSale = () => {
  return (
    <div className="3xl:p-12 2xl:p-10 xl:p-8 p-4 bg-gradient-to-r from-[#FFEDD933] to-[#FFE8CE4D] h-[200px] w-full rounded-md">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between gap-2">
          <div>
            <Image src="/images/flash-sale.png" alt="flash-sale" width={100} height={100} />
            <h2 className="text-2xl font-bold">Flash Sale</h2>
          </div>
          <p className="text-sm text-gray-500">
            Get the best deals on our products
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
