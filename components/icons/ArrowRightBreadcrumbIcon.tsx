const ArrowRightBreadcrumbIcon = ({
  color = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clip-path="url(#clip0_2354_3928)">
        <path
          d="M3 1.66693L5 4.00026L3 6.3336"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2354_3928">
          <rect
            width="8"
            height="8"
            fill={color}
            transform="translate(0 0.000244141)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowRightBreadcrumbIcon;
