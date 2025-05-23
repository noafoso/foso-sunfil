const PlayStoreIcon = ({
  color = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clip-path="url(#clip0_2349_2680)">
        <path
          d="M4.81556 1.21191L17.6221 14.0161L20.9268 10.7114C16.4111 7.97162 10.363 4.29622 7.64302 2.64371L5.8207 1.53973C5.49862 1.34351 5.15372 1.23783 4.81556 1.21191ZM2.86071 2.74495C2.83479 2.88564 2.8125 3.02702 2.8125 3.17882V28.4835C2.8125 28.5896 2.83385 28.6884 2.84865 28.7896L15.877 15.7613L2.86071 2.74495ZM23.0986 12.0299L19.3673 15.7613L23.0336 19.4275C24.9761 18.2501 26.3215 17.4326 26.4708 17.3425C27.1311 16.9389 27.504 16.33 27.4928 15.6648C27.483 15.012 27.11 14.4283 26.4757 14.0691C26.3337 13.9876 25.0066 13.1863 23.0986 12.0299ZM17.6221 17.5064L4.85414 30.2744C5.1022 30.2312 5.34994 30.1572 5.58689 30.0141C5.9152 29.8141 14.7836 24.4336 20.8618 20.746L17.6221 17.5064Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2349_2680">
          <rect
            width="30"
            height="30"
            fill={color}
            transform="translate(0 0.743164)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlayStoreIcon;
