"use client";

import { useGetListCategories } from "@/managers/api-management/categories/useGetListCategories";
import { useResizeStore } from "@/stores/useResizeStore";
import { useEffect } from "react";
import { useStateHome } from "./_state/useStateHome";
import SectionIntroHome from "./components/SectionIntroHome";
import SectionSecondHome from "./components/SectionSecondHome";
import FlashSale from "./components/FlashSale";
import ViewedProducts from "./components/ViewedProducts";
import SuggestedForYou from "./components/SuggestedForYou";
import NewArrival from "./components/NewArrival";
import FeaturedPosts from "./components/FeaturedPosts";
import HeroBanner from "./components/HeroBanner";
import DiscountCodeBanner from "./components/DiscountCodeBanner";

const Home = () => {
  const { isVisibleMobile } = useResizeStore();

  const { queryKeyIsStateHome } = useStateHome();

  const { data: listCategories } = useGetListCategories();

  useEffect(() => {
    if (listCategories) {
      queryKeyIsStateHome({ idTabActive: listCategories[0] });
    }
  }, [listCategories]);

  return (
    <div className="relative bg-[#F4F6F8] w-full 3xl:px-12 2xl:px-10 xl:px-8 px-4 flex flex-col gap-8">
      {/* <div className="pt-[112px] flex flex-col justify-between md:gap-0 gap-16 3xl:pb-8 2xl:pb-6 pb-3 h-full relative z-10">
        <SectionIntroHome />
        {isVisibleMobile && (
          <div className="w-full h-[400px] grid grid-cols-12 bg-white">
            <div className="col-span-12 bg-[url('/background/home/bg-home.png')] bg-cover bg-center bg-no-repeat" />
          </div>
        )}
        <SectionSecondHome />
      </div>
      <div className="w-full h-screen md:grid grid-cols-12 bg-white md:absolute hidden top-0 left-0 z-0">
        <div className="xl:col-span-7 col-span-8" />
        <div className="xl:col-span-5 col-span-4 bg-[url('/background/home/bg-home.png')] bg-cover bg-center bg-no-repeat" />
      </div> */}
      <HeroBanner />
      <FlashSale />
      <ViewedProducts />
      <DiscountCodeBanner />
      <SuggestedForYou />
      <NewArrival />
      <FeaturedPosts />
    </div>
  );
};

export default Home;
