import SwiperCarousel from "@/components/SwiperCarousel";
import React, { useEffect } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";

type Brand = {
  id: string;
  name: string;
  logo: string; // đường dẫn ảnh
};

type BrandListProps = {
  brands: Brand[];
};
const BrandList = ({ brands }: BrandListProps) => {
  // const controls = useAnimation();

  // useEffect(() => {
  //   const sequence = () => {
  //     while (true) {
  //       controls.start({
  //         x: "-100%",
  //         transition: {
  //           duration: 100,
  //           ease: "linear",
  //         },
  //       });
  //       controls.set({ x: "0%" });
  //     }
  //   };

  //   sequence();
  // }, [controls]);

  return (
    <div className="relative w-full overflow-hidden py-4 bg-[#F4F6F8]">
      <motion.div
        className="flex gap-6 w-max"
        // animate={controls}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 200,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="w-[160px] p-2 aspect-square bg-white rounded-xl border border-[#919EAB] border-opacity-20 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300"
          >
            <div className="w-[60px] h-[60px] relative">
              <img
                src={brand.logo}
                alt={brand.name}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full h-[1px] bg-[#919EAB] bg-opacity-20 my-1" />
            <p className="text-sm font-medium text-[#454F5B]">{brand.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandList;
