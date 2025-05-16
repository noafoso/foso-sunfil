import { ISVG } from "@/types/svg/svg";
import React from "react";

const IconSupportHeader = (ISVG: ISVG) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={ISVG.className}
    >
      <path
        d="M20.2749 10.0002C20.2749 15.5231 15.7978 20.0002 10.2749 20.0002C4.75205 20.0002 0.274902 15.5231 0.274902 10.0002C0.274902 4.4774 4.75205 0.000244141 10.2749 0.000244141C15.7978 0.000244141 20.2749 4.4774 20.2749 10.0002Z"
        // fill="#0373F3"
        fill={ISVG.fill || "currentColor"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2749 5.25024C10.6891 5.25024 11.0249 5.58603 11.0249 6.00024V9.68958L13.3052 11.9699C13.5981 12.2628 13.5981 12.7377 13.3052 13.0306C13.0123 13.3235 12.5375 13.3235 12.2446 13.0306L9.74457 10.5306C9.60392 10.3899 9.5249 10.1992 9.5249 10.0002V6.00024C9.5249 5.58603 9.86069 5.25024 10.2749 5.25024Z"
        fill="white"
      />
    </svg>
  );
};

export default IconSupportHeader;
