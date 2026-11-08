import React from "react";

const ProfileIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle
      cx={12}
      cy={5.77803}
      r={4.77803}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.00002 17.2014C0.998732 16.8655 1.07385 16.5337 1.2197 16.2311C1.67736 15.2812 2.45465 14.5234 3.41591 14.0888C4.37717 13.6541 5.46183 13.5699 6.4783 13.8508C8.1463 14.3115 10.0427 14.5 12 14.5C13.9573 14.5 15.8537 14.3115 17.5217 13.8508C18.5382 13.5699 19.6228 13.6541 20.5841 14.0888C21.5454 14.5234 22.3226 15.2812 22.7803 16.2311C22.9262 16.5337 23.0013 16.8655 23 17.2014V18.5C23 20.9853 20.9853 23 18.5 23H5.5C3.01472 23 1.00002 20.9853 1.00002 18.5V17.2014Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ProfileIcon;
