'use client';
import { createPopper } from '@popperjs/core';
import Link from 'next/link';
import React from 'react';

export const PagesDropdown = () => {
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
        className="lg:text-white dark:lg:text-black lg:hover:text-slate-200 dark:lg:hover:text-slate-800 text-slate-700 dark:text-slate-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Demo Pages
      </Link>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white dark:bg-black text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        <span
          className={
            'text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400 dark:text-slate-600'
          }
        >
          Admin Layout
        </span>
        <Link
          href="/admin"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-300'
          }
        >
          Dashboard
        </Link>
        <Link
          href="/admin/settings"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-300'
          }
        >
          Settings
        </Link>
        <Link
          href="/admin/tables"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-300'
          }
        >
          Tables
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-slate-100 dark:border-slate-900" />
        <span
          className={
            'text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400 dark:text-slate-600'
          }
        >
          Auth Layout
        </span>
        <Link
          href="/auth/login"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-300'
          }
        >
          Login
        </Link>
        <Link
          href="/auth/register"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-300'
          }
        >
          Register
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-slate-100 dark:border-slate-900" />
        <span
          className={
            'text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400 dark:text-slate-600'
          }
        >
          No Layout
        </span>
        <Link
          href="/landing"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-300'
          }
        >
          Landing
        </Link>
        <Link
          href="/profile"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-300'
          }
        >
          Profile
        </Link>
      </div>
    </>
  );
};
