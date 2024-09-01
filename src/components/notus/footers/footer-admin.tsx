import Link from 'next/link';
import React from 'react';

export function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-slate-200 dark:border-slate-800" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{' '}
                <Link
                  href="https://www.creative-tim.com?ref=nnjs-footer-admin"
                  className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-semibold py-1"
                >
                  Creative Tim
                </Link>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <Link
                    href="https://www.creative-tim.com?ref=nnjs-footer-admin"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm font-semibold block py-1 px-3"
                  >
                    Creative Tim
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.creative-tim.com/presentation?ref=nnjs-footer-admin"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://blog.creative-tim.com?ref=nnjs-footer-admin"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-admin"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
