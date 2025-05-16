"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils"; // hoặc tự viết hàm gộp class
import { ChevronRight } from "lucide-react";
import { MenuItem } from "@/types/categories/ICategoryes";
import Image from "next/image";
import MenuContent from "@/components/Menu/MenuContent";

type MegaMenuDropdownProps = {
  triggerLabel?: React.ReactNode;
  items: MenuItem[];
  IsProducts?: boolean;
  classNameButton?: string;
  classNameContent?: string;
  classNameSubItem?: string;
  icon?: React.ReactNode;
  allowHover?: boolean;
};

const MegaMenuDropdown = ({
  triggerLabel = "Menu",
  items,
  IsProducts = false,
  classNameButton = "",
  classNameContent = "",
  classNameSubItem = "",
  icon,
  allowHover = true,
}: MegaMenuDropdownProps) => {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (allowHover) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (allowHover) {
      setIsOpen(false);
      setActiveItem(null);
    }
  };

  return (
    <>
      {/* Overlay blur layer */}
      {activeItem && (
        <div className="fixed inset-0 bg-black/25 backdrop-blur-sm z-40" />
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

            <MenuContent
              classNameContent={classNameContent}
              classNameSubItem={classNameSubItem}
              activeItem={activeItem}
              items={items}
              IsProducts={IsProducts}
              setActiveItem={setActiveItem}
              onClose={handleMouseLeave}
              onHover={() => setIsOpen(true)}
              // setActiveItem={handleItemHover}
            />
          </>
        )}
      </div>
    </>
  );
};

export default MegaMenuDropdown;
