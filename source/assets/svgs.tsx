import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const Cart = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#0F1111"
      d="M7.996 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Zm-6-15c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44c-.73 1.34.23 2.97 1.75 2.97h11c.55 0 1-.45 1-1s-.45-1-1-1h-11l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49a.996.996 0 0 0-.87-1.48h-14.8l-.67-1.43a.993.993 0 0 0-.9-.57h-1.64c-.55 0-1 .45-1 1Zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z"
    />
  </Svg>
);

export const Search = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <Path
      stroke="#888"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.083 17.417a7.333 7.333 0 1 0 0-14.667 7.333 7.333 0 0 0 0 14.667ZM19.25 19.25l-3.988-3.988"
    />
  </Svg>
);

export const BackArrow = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={14}
    fill="none"
    {...props}>
    <Path
      fill="#424347"
      fillRule="evenodd"
      d="m3.414 8 4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L3.414 6H22a1 1 0 1 1 0 2H3.414Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Dash = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={3}
    fill="none"
    {...props}>
    <Path
      fill="#333"
      d="M1 2.906c-.552 0-1-.63-1-1.406C0 .723.448.094 1 .094h6c.552 0 1 .63 1 1.406 0 .777-.448 1.406-1 1.406H1Z"
    />
  </Svg>
);

export const Cross = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={11}
    fill="none"
    {...props}>
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M4.5.875c-.621 0-1.125.54-1.125 1.205v2.411h-2.25C.504 4.491 0 5.031 0 5.696c0 .666.504 1.206 1.125 1.206h2.25v2.41c0 .666.504 1.206 1.125 1.206s1.125-.54 1.125-1.206v-2.41h2.25C8.496 6.902 9 6.362 9 5.696c0-.665-.504-1.205-1.125-1.205h-2.25v-2.41c0-.666-.504-1.206-1.125-1.206Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Book = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <Path
      stroke="#8688BC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.667 17.875a2.292 2.292 0 0 1 2.291-2.292h12.375"
    />
    <Path
      stroke="#8688BC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.958 1.833h12.375v18.334H5.958a2.292 2.292 0 0 1-2.291-2.292V4.125a2.292 2.292 0 0 1 2.291-2.292Z"
    />
  </Svg>
);

export const Trash = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={14}
    fill="none"
    {...props}>
    <Path
      fill="#DB2525"
      fillRule="evenodd"
      d="M4.793 1.972h2.414v-.436c0-.099-.053-.158-.097-.158H4.89c-.043 0-.097.06-.097.158v.436Zm3.76 0h2.774c.372 0 .673.309.673.69 0 .38-.301.689-.673.689h-.171l-.503 8.597C10.593 13.065 9.776 14 8.757 14H3.243c-1.018 0-1.835-.934-1.896-2.049l-.503-8.6H.673A.681.681 0 0 1 0 2.66c0-.38.301-.689.673-.689h2.774v-.436C3.447.698 4.081 0 4.89 0h2.22c.808 0 1.443.696 1.443 1.536v.436Zm-6.36 1.379h7.615l-.498 8.518c-.024.434-.302.753-.553.753H3.243c-.25 0-.529-.319-.552-.75L2.192 3.35Zm1.783 1.363c0-.38.301-.69.673-.69.371 0 .672.31.672.69v6.548c0 .38-.3.69-.672.69a.681.681 0 0 1-.673-.69V4.714Zm3.375-.69a.681.681 0 0 0-.672.69v6.548c0 .38.3.69.672.69a.681.681 0 0 0 .673-.69V4.714c0-.38-.301-.69-.673-.69Z"
      clipRule="evenodd"
    />
  </Svg>
);
