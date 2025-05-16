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
import { categoryData } from "@/components/layout/header/NewDesktopHeader";
import { IMAGES } from "@/constants/Images";
import BrandList from "@/app/(client)/home/components/BrandList";

const ListTopBanner = [
  {
    id: "banner_1",
    image: IMAGES.topBanner_1,
  },
  // {
  //   id: "banner_1",
  //   image: IMAGES.topBanner_2,
  // },
  // {
  //   id: "banner_3",
  //   image: "https://swiperjs.com/demos/images/nature-2.jpg",
  // },
];

const carBrands = [
  { id: "honda", name: "Honda", logo: "home/LogoCar/Honda.png" },
  { id: "ford", name: "Ford", logo: "home/LogoCar/Ford.png" },
  { id: "bmw", name: "BMW", logo: "home/LogoCar/BMW.png" },
  { id: "audi", name: "Audi", logo: "home/LogoCar/Audi.png" },
  { id: "kia", name: "KIA-Morning", logo: "home/LogoCar/Kia.png" },
  { id: "nissan", name: "Nissan", logo: "home/LogoCar/Nissan.png" },
  { id: "chevrolet", name: "Chevrolet", logo: "home/LogoCar/Chevrolet.png" },
  { id: "volkswagen", name: "Volkswagen", logo: "home/LogoCar/Volkswagen.png" },
  { id: "lexus", name: "Lexus", logo: "home/LogoCar/Lexus.png" },
  { id: "volvo", name: "Volvo", logo: "home/LogoCar/Volvo.png" },
  { id: "honda1", name: "Honda", logo: "home/LogoCar/Honda.png" },
  { id: "ford1", name: "Ford", logo: "home/LogoCar/Ford.png" },
  { id: "bmw1", name: "BMW", logo: "home/LogoCar/BMW.png" },
  { id: "audi1", name: "Audi", logo: "home/LogoCar/Audi.png" },
  { id: "kia1", name: "KIA-Morning", logo: "home/LogoCar/Kia.png" },
  { id: "nissan1", name: "Nissan", logo: "home/LogoCar/Nissan.png" },
];

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
    <div className="relative bg-[#F4F6F8] w-full 3xl:px-12 2xl:px-10 xl:px-8 px-4 flex flex-col gap-8 ">
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
      <HeroBanner
        items={categoryData}
        IsProducts={true}
        bannerSlides={ListTopBanner}
      />
      <BrandList brands={carBrands} />
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
