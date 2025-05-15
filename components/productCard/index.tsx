import { IMAGES } from "@/constants/Images";
import Image from "next/image";

interface ProductCardProps {
  imageSrc?: string;
}

const ProductCard = ({ imageSrc = IMAGES.product }: ProductCardProps) => {
  return (
    <div className="flex flex-col w-full h-full mb-5 bg-white rounded-lg shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.12),0px_0px_2px_0px_rgba(145,158,171,0.20)] group overflow-hidden hover:shadow-[0px_16px_32px_-4px_rgba(145,158,171,0.2)] cursor-pointer">
      <div className="p-1 rounded-sm flex-1 flex items-center justify-center overflow-hidden">
        <div className="overflow-hidden w-full aspect-square rounded-sm">
          <Image
            src={imageSrc}
            alt="product"
            width={400}
            height={400}
            className="w-full aspect-square object-cover rounded-sm transition-transform duration-300 group-hover:-translate-y-2"
          />
        </div>
      </div>
      <div className="p-6 pt-4 flex flex-col gap-4">
        <div className="w-fit flex gap-1.5 items-center py-[2px] px-2.5 bg-gradient-to-r from-warning-light to-warning-main rounded-full">
          <div className="flex items-center justify-center size-4 bg-[#FFF1DC] rounded-full">
            <Image src={IMAGES.fire} alt="fire" width={16} height={16} />
          </div>
          <span className="text-sm font-semibold text-error-darker">
            Giá cực sốc
          </span>
        </div>
        <h4 className="text-primary-new group-hover:text-error-dark text-base font-semibold line-clamp-2">
          Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer
          (52046262)
        </h4>
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-error-dark font-semibold text-xl">
              299,000{" "}
            </span>
            <span className="text-error-dark font-semibold text-xl underline">
              đ
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center text-[#919EAB] font-normal text-sm ">
              <p className="line-through">329,000</p>
              <span className="underline">đ</span>
            </div>

            <span className="text-error-dark text-xs font-medium">-10%</span>
          </div>
          <button className="w-full bg-brand-50 text-brand-600 text-sm font-bold px-3 py-2 rounded-lg hover:bg-brand-100 transition-colors duration-300">
            Mua hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
