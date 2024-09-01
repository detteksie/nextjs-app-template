'use client';
import { createPopper } from '@popperjs/core';
import Link from 'next/link';
import React from 'react';
import { FaBell } from 'react-icons/fa';

export const NotificationDropdown = () => {
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
        className="text-slate-500 block py-1 px-3"
        href="#"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        {/* <i className="fas fa-bell" /> */}
        <FaBell className="inline-block" />
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
