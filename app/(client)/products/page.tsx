"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import { useGetListCategories } from "@/managers/api-management/categories/useGetListCategories";
import { useGetDataPageAboutUs } from "@/managers/api-management/ui/about-us/useGetDataPageAboutUs";
import BannerProduct from "./components/BannerProduct";
import MainContent from "./components/MainContent";
import ServiceHighlights from "@/components/serviceHighlights";
import StoreLocatorBanner from "@/components/storeLocatorBanner";
const Products = () => {
  const { data: dataListProducts, isLoading } = useGetListCategories();
  const { data: dataIntroduceProduct } = useGetDataPageAboutUs({
    enebled: true,
  });
  console.log(dataListProducts);
  console.log("dataIntroduceProduct", dataIntroduceProduct);

  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm", href: "/products" },
  ];

  return (
    <>
      <div className="bg-[#F4F6F8] flex flex-col gap-8 pt-32 3xl:px-12 2xl:px-10 xl:px-8 px-4">
        <Breadcrumbs items={breadcrumbs} />
        <BannerProduct />
        <MainContent />
        <ServiceHighlights />
      </div>
      <StoreLocatorBanner />
    </>
  );
};

export default Products;
