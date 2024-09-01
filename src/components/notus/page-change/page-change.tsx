import React from 'react';
import { FaCircleNotch } from 'react-icons/fa';

export type PageChangeProps = {
  path: string;
};

export function PageChange(props: PageChangeProps) {
  return (
    <div>
      <div
        className="bg-cover fixed z-40 w-full h-full top-0 left-0"
        style={{
          backgroundImage: "url('/img/img-1-1000x600.jpg')",
        }}
      ></div>
      <div className="top-0 left-0 w-full h-full block z-50 absolute bg-black dark:bg-white bg-opacity-50"></div>
      <div className="my-32 mx-auto max-w-sm text-center relative z-50 top-0">
        <div className="block mb-4">
          {/* <i className="fas fa-circle-notch animate-spin text-white dark:text-black mx-auto text-6xl" /> */}
          <FaCircleNotch className="inline-block animate-spin text-white dark:text-black mx-auto text-6xl" />
        </div>
        <h4 className="text-lg font-medium text-white dark:text-black">
          Loading page contents for: {props.path}
        </h4>
      </div>
    </div>
  );
}
