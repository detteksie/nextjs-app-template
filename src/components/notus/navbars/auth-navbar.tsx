'use client';
import Link from 'next/link';
import React from 'react';
import {
  FaArrowAltCircleDown,
  FaBars,
  FaFacebook,
  FaGithub,
  FaRegFileAlt,
  FaTwitter,
} from 'react-icons/fa';

import { PagesDropdown } from '|/components/notus/dropdowns/pages-dropdown';

export type AuthNavbarProps = {
  transparent: boolean;
};

export function AuthNavbar(props: AuthNavbarProps) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/notus"
              className="text-white dark:text-black text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Notus NextJS
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {/* <i className="text-white dark:text-black fas fa-bars" /> */}
              <FaBars className="inline-block text-white dark:text-black" />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white dark:bg-black lg:bg-opacity-0 dark:lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link
                  className="lg:text-white dark:lg:text-black lg:hover:text-slate-200 dark:lg:hover:text-slate-800 text-slate-700 dark:text-slate-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-auth-navbar"
                >
                  {/* <i className="lg:text-slate-200 dark:lg:text-slate-800 text-slate-400 dark:text-slate-600 far fa-file-alt text-lg leading-lg mr-2" /> */}
                  <FaRegFileAlt className="inline-block lg:text-slate-200 dark:lg:text-slate-800 text-slate-400 dark:text-slate-600 text-lg leading-lg mr-2" />{' '}
                  Docs
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <PagesDropdown />
              </li>
              <li className="flex items-center">
                <Link
                  className="lg:text-white dark:lg:text-black lg:hover:text-slate-200 dark:lg:hover:text-slate-800 text-slate-700 dark:text-slate-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"
                  target="_blank"
                >
                  {/* <i className="lg:text-slate-200 dark:lg:text-slate-800 text-slate-400 dark:text-slate-600 fab fa-facebook text-lg leading-lg" /> */}
                  <FaFacebook className="inline-block lg:text-slate-200 dark:lg:text-slate-800 text-slate-400 dark:text-slate-600 text-lg leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="lg:text-white dark:lg:text-black lg:hover:text-slate-200 dark:lg:hover:text-slate-800 text-slate-700 dark:text-slate-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                  target="_blank"
                >
                  {/* <i className="lg:text-slate-200 dark:lg:text-slate-800 text-slate-400 dark:text-slate-600 fab fa-twitter text-lg leading-lg" /> */}
                  <FaTwitter className="inline-block lg:text-slate-200 dark:lg:text-slate-800 text-slate-400 dark:text-slate-600 text-lg leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="lg:text-white dark:lg:text-black lg:hover:text-slate-200 dark:lg:hover:text-slate-800 text-slate-700 dark:text-slate-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-auth-navbar"
                  target="_blank"
                >
                  {/* <i className="lg:text-slate-200 dark:lg:text-slate-800 text-slate-400 dark:text-slate-600 fab fa-github text-lg leading-lg" /> */}
                  <FaGithub className="inline-block lg:text-slate-200 dark:lg:text-slate-800 text-slate-400 dark:text-slate-600 text-lg leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </Link>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-white dark:bg-black text-slate-700 dark:text-slate-300 active:bg-slate-50 dark:active:bg-slate-950 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  {/* <i className="fas fa-arrow-alt-circle-down" /> */}
                  <FaArrowAltCircleDown className="inline-block" /> Download
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
