"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils"; // hoặc tự viết hàm gộp class
import { ChevronRight } from "lucide-react";
import {  MenuItem } from "@/types/categories/ICategoryes";
import Image from "next/image";

type MegaMenuDropdownProps = {
  triggerLabel?: React.ReactNode;
  items: MenuItem[];
  IsProducts?: boolean;
  classNameButton?: string;
  classNameContent?: string;
  classNameSubItem?: string;
  icon?: React.ReactNode;
};

const MegaMenuDropdown = ({
  triggerLabel = "Menu",
  items,
  IsProducts = false,
  classNameButton = "",
  classNameContent = "",
  classNameSubItem = "",
  icon,
}: MegaMenuDropdownProps) => {
  
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mở dropdown khi hover vào button
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // Đóng dropdown chỉ khi ra khỏi container hoàn toàn
  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveItem(null);
  };

  return (
    <>
      {/* Overlay blur layer */}
      {activeItem && (
        <div className="fixed inset-0 bg-black/25 backdrop-blur-sm z-20" />
      )}

      {/* Container bọc cả hệ thống dropdown */}
      <div ref={containerRef} className="relative ">
        {/* Trigger button */}
        <button
          className={cn(
            "flex items-center space-x-2 relative z-10 bg-brand-650 text-white py-3 px-4 text-base font-bold rounded-md",
            classNameButton
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {icon} {triggerLabel}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown content - khi mở ra sẽ tạo một invisible "cầu nối" */}
        {isOpen && (
          <>
            {/* Cầu nối vô hình giữa button và dropdown */}
            <div
              className="absolute left-0 w-full h-4 bg-transparent z-50 "
              style={{ top: "100%" }}
              onMouseEnter={() => setIsOpen(true)}
            />

            <div
              className={cn(
                "absolute top-[calc(100%+4px)] left-0 min-w-[250px] rounded-tl-sm rounded-bl-sm rounded-br-none z-50 p-0 border-none min-h-[500px] pb-7 shadow-none bg-white",
                classNameContent
              )}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="divide-y h-full ">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => {
                      setActiveItem(item);
                    }}
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
                <div className="absolute left-full top-0 bottom-0 w-[900px] min-h-full bg-[#F4F6F8] p-4 rounded-tr-sm rounded-br-sm">
                  {activeItem.subItems && (
                    <div className="grid grid-cols-3 gap-4 mb-4 border-b border-[#919EAB] border-opacity-25 pb-4">
                      {activeItem.subItems.map((sub, index) => (
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
                    <div className="mt-4">
                      <div className="flex flex-row justify-between items-center">
                        <h3 className="text-2xl font-bold mb-2 text-[#1C252E]">
                          Sản Phẩm Bán Chạy
                        </h3>
                        <p className="cursor-pointer font-semibold text-brand-500 text-base transform transition duration-200 hover:scale-105">
                          Xem tất cả
                        </p>
                      </div>

                      <div className="flex gap-3 overflow-auto"></div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MegaMenuDropdown;
