'use client';
/* eslint-disable @next/next/no-img-element */
import { createPopper } from '@popperjs/core';
import Link from 'next/link';
import React from 'react';

export const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef<HTMLAnchorElement>();
  const popoverDropdownRef = React.createRef<HTMLDivElement>();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current!, popoverDropdownRef.current!, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <Link
        className="text-slate-500 block"
        href="#"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white dark:text-black bg-slate-200 dark:bg-slate-800 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/img/team-1-800x800.jpg"
            />
          </span>
        </div>
      </Link>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white dark:bg-black text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        <Link
          href="#"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-300'
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </Link>
        <Link
          href="#"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-300'
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </Link>
        <Link
          href="#"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-300'
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </Link>
        <div className="h-0 my-2 border border-solid border-slate-100 dark:border-slate-900" />
        <Link
          href="#"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-300'
          }
          onClick={(e) => e.preventDefault()}
        >
          Seprated link
        </Link>
      </div>
    </>
  );
};
