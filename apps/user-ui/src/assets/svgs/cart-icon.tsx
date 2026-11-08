import * as React from "react";

const CartIcon = (props: any) => (
  <svg
    width={25}
    height={22}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 8H19L20 19C20.1 20.1 19.2 21 18.1 21H5.9C4.8 21 3.9 20.1 4 19L5 8Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M8 9V6C8 3.8 9.8 2 12 2C14.2 2 16 3.8 16 6V9"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CartIcon;
