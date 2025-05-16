import MinusIcon from "@/components/icons/MinusIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import { IMAGES } from "@/constants/Images";
import { Rating, Star } from "@smastrom/react-rating";
import Image from "next/image";

const StarDrawing = (
  <path d="M13.6331 16.5003C13.4999 16.5008 13.3684 16.4694 13.2498 16.4086L8.9998 14.1836L4.7498 16.4086C4.6118 16.4812 4.4562 16.5136 4.3007 16.5021C4.1452 16.4906 3.99603 16.4358 3.87016 16.3438C3.74429 16.2517 3.64675 16.1263 3.58865 15.9816C3.53054 15.8369 3.5142 15.6788 3.54147 15.5253L4.3748 10.8336L0.941469 7.50027C0.83435 7.39338 0.758362 7.25933 0.721659 7.11252C0.684955 6.9657 0.688923 6.81167 0.733135 6.66694C0.781435 6.51883 0.870282 6.38723 0.989594 6.28707C1.10891 6.18691 1.2539 6.12219 1.40814 6.10027L6.15814 5.4086L8.2498 1.1336C8.31804 0.992712 8.42458 0.87389 8.55723 0.79075C8.68987 0.707609 8.84326 0.663513 8.9998 0.663513C9.15635 0.663513 9.30973 0.707609 9.44238 0.79075C9.57502 0.87389 9.68156 0.992712 9.7498 1.1336L11.8665 5.40027L16.6165 6.09194C16.7707 6.11386 16.9157 6.17857 17.035 6.27874C17.1543 6.3789 17.2432 6.5105 17.2915 6.6586C17.3357 6.80333 17.3396 6.95737 17.3029 7.10418C17.2662 7.251 17.1903 7.38504 17.0831 7.49194L13.6498 10.8253L14.4831 15.5169C14.5129 15.6732 14.4973 15.8347 14.4382 15.9823C14.3792 16.13 14.2791 16.2577 14.1498 16.3503C13.9989 16.456 13.8172 16.5088 13.6331 16.5003Z" />
);

const customStyles = {
  itemShapes: StarDrawing,
  activeFillColor: "#FFAB00",
  inactiveFillColor: "#919EAB",
};

const ProductSummary = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl text-[#374151] font-semibold">
          Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer
          (52046262)
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Rating
              value={4}
              readOnly
              style={{ maxWidth: 100 }}
              itemStyles={customStyles}
            />
            <p className="text-sm text-primary-new">
              4.0 <span className="text-secondary-new"> (123)</span>
            </p>
          </div>
          <div className="pl-3 flex items-center gap-1 border-l border-[#919EAB33]">
            <span className="text-sm text-primary-new font-medium">
              Mã sản phẩm:{" "}
            </span>
            <span className="text-sm text-[#6A6662] font-normal">
              17220-RB6-000
            </span>
          </div>
          <div className="pl-3 flex items-center gap-1 border-l border-[#919EAB33]">
            <span className="text-sm text-primary-new font-medium">
              Đã bán:{" "}
            </span>
            <span className="text-sm text-[#6A6662] font-normal">789</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <h3 className="text-[32px]/[32px] font-bold text-error-dark">
            299,000 <span className="underline">đ</span>
          </h3>
          <div className="flex items-center gap-3 pl-3 border-l border-[#919EAB33]">
            <h3 className="text-2xl font-normal line-through text-[#919EAB]">
              329,000 <span className="underline">đ</span>
            </h3>
            <span className="text-sm text-white font-bold py-1 px-3 rounded-full bg-error-main">
              -10%
            </span>
          </div>
        </div>
        <p className="text-base font-medium italic text-secondary-new">
          Giá bán đã bao gồm 8% VAT
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Image src={IMAGES.checkOne} alt="check" width={24} height={24} />
          <p className="text-base font-normal text-grey-700">
            Tăng hiệu suất động cơ, hiệu năng bền bỉ
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Image src={IMAGES.checkOne} alt="check" width={24} height={24} />
          <p className="text-base font-normal text-grey-700">
            Tăng tuổi thọ động cơ, tiết kiệm chi phí
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Image src={IMAGES.checkOne} alt="check" width={24} height={24} />
          <p className="text-base font-normal text-grey-700">
            Tốt cho sức khỏe, Thân thiện với môi trường
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-6">
          <h4 className="text-base font-medium text-secondary-new">Số lượng</h4>
          <div className="flex items-center rounded-lg border border-[#DFE4EA] overflow-hidden min-w-[122px]">
            <button className="p-2 flex justify-center items-center h-full border-r border-[#DFE4EA]">
              <MinusIcon className="size-4 text-[#919EABCC]" />
            </button>
            <div className="flex-1 h-full flex justify-center items-center py-1">
              <span className="text-base font-medium text-primary-new">1</span>
            </div>
            <button className="p-2 flex justify-center items-center h-full border-l border-[#DFE4EA]">
              <PlusIcon className="size-4 text-[#919EABCC]" />
            </button>
          </div>
          <h4 className="text-base font-medium text-secondary-new">
            còn 1234 sản phẩm
          </h4>
        </div>
        <div className="flex flex-col gap-4 w-[491px]">
          <button className="bg-brand-500 rounded-lg py-3 text-white text-base font-bold">
            Mua ngay
          </button>
          <button className="flex items-center gap-2 justify-center border border-brand-500 rounded-lg py-3 text-brand-500 text-base font-medium">
            <Image src={IMAGES.cart} alt="check" width={24} height={24} />
            Thêm vào giỏ hàng
          </button>
          <button className="border border-brand-500 rounded-lg py-3 text-brand-500 text-base font-bold">
            Xem OEM
          </button>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <p className="text-sm font-normal text-secondary-900">Chia sẻ</p>
            <div className="flex items-center gap-2">
              <Image
                src={IMAGES.messenger}
                alt="messenger"
                width={24}
                height={24}
              />
              <Image
                src={IMAGES.facebook}
                alt="facebook"
                width={24}
                height={24}
              />
              <Image
                src={IMAGES.instagram}
                alt="instagram"
                width={24}
                height={24}
              />
              <Image src={IMAGES.zalo} alt="zalo" width={24} height={24} />
            </div>
            <hr className="w-7 border-[#919EAB33] rotate-90" />
            <div className="flex items-center gap-2">
              <Image src={IMAGES.heart} alt="heart" width={24} height={24} />
              <p className="text-sm font-medium text-primary-new">
                Đã thích{" "}
                <span className="text-secondary-600 font-normal">(12)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
