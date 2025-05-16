const LongArrowIcon = ({
  color = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M5.33325 16H26.6666M26.6666 16L18.6666 8M26.6666 16L18.6666 24"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LongArrowIcon;
