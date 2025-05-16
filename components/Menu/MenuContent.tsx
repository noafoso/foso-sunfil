import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/types/categories/ICategoryes";
import { IMAGES } from "@/constants/Images";
import ProductCard from "@/components/productCard";

const productImages = [
  IMAGES.product9,
  IMAGES.product10,
  IMAGES.product11,
  IMAGES.product12,
  IMAGES.product13,
  IMAGES.product14,
  IMAGES.product15,
  IMAGES.product16,
];

const productCards = Array(4)
  .fill(0)
  .map((_, index) => (
    <ProductCard
      key={index}
      imageSrc={productImages[index]}
      classNameImage="size-[150px]"
      isBanner={true}
      className="mb-0"
    />
  ));

type MegaMenuContentProps = {
  classNameContent?: string;
  classNameSubItem?: string;
  classNameActiveItem?: string;
  activeItem: MenuItem | null;
  items: MenuItem[];
  IsProducts?: boolean;
  setActiveItem: (item: MenuItem | null) => void;
  onClose: () => void;
  onHover: () => void;
  isBanner?: boolean;
};

const MenuContent = ({
  classNameContent = "",
  classNameSubItem = "",
  activeItem,
  items = [],
  IsProducts = false,
  setActiveItem,
  onClose,
  onHover,
  isBanner = false,
  classNameActiveItem = "",
}: MegaMenuContentProps) => {
  return (
    <>
      {/* Overlay blur layer */}
      {activeItem && (
        <div className="fixed inset-0 bg-black/25 backdrop-blur-sm z-50" />
      )}
      <div
        className={cn(
          " min-w-[250px] rounded-tl-sm rounded-bl-sm rounded-br-none z-50 p-0 border-none h-[600px] shadow-none bg-white",
          !isBanner && "absolute top-[calc(100%+4px)] left-0",
          classNameContent
        )}
        onMouseEnter={onHover}
        onMouseLeave={onClose}
      >
        <div className="divide-y h-full overflow-y-scroll">
          {items.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveItem(item)}
              className={cn(
                "flex items-center gap-2 p-3 w-full text-left bg-white border-t-white border-l-white",
                activeItem?.id === item.id &&
                  "border-l-2 border-l-brand-700 text-brand-700 bg-disable-100",
                classNameSubItem
              )}
            >
              {item.icon && item.icon}
              <span>{item.name}</span>
              <ChevronRight className="ml-auto w-4 h-4" />
            </div>
          ))}
        </div>

        {activeItem && (
          <div className="absolute left-full top-0 bottom-0 w-[900px] min-h-full bg-[#F4F6F8] p-4 rounded-tr-sm rounded-br-sm flex flex-col overflow-y-scroll">
            {activeItem?.subItems && (
              <div className="grid grid-cols-3 gap-4 mb-4 border-b border-[#919EAB] border-opacity-25 pb-4">
                {activeItem?.subItems?.map((sub, index) => (
                  <div
                    key={index}
                    className="transition transform duration-200 hover:scale-105 bg-white rounded-xl px-4 py-3 text-center flex gap-x-4 items-center justify-start cursor-pointer"
                  >
                    <div>
                      <Image
                        src={sub.image}
                        alt={`image-${index}`}
                        width={200}
                        height={200}
                        className="size-16 object-contain aspect-square"
                      />
                    </div>
                    <p className="font-semibold text-base text-[#1C252E]">
                      {sub.name}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {IsProducts && (
              <div className="mt-4 flex-1">
                <div className="flex flex-col h-full w-full">
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="text-2xl font-bold mb-2 text-[#1C252E]">
                      Sản Phẩm Bán Chạy
                    </h3>
                    <p className="cursor-pointer font-semibold text-brand-500 text-base transform transition duration-200 hover:scale-105">
                      Xem tất cả
                    </p>
                  </div>
                  <div className="flex-1 flex gap-3">{productCards}</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MenuContent;
