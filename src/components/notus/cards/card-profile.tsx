/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

export function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-black w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src="/img/team-2-800x800.jpg"
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-600 dark:text-slate-400">
                    22
                  </span>
                  <span className="text-sm text-slate-400 dark:text-slate-600">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-600 dark:text-slate-400">
                    10
                  </span>
                  <span className="text-sm text-slate-400 dark:text-slate-600">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-600 dark:text-slate-400">
                    89
                  </span>
                  <span className="text-sm text-slate-400 dark:text-slate-600">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-slate-700 dark:text-slate-300">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-slate-400 dark:text-slate-600 font-bold uppercase">
              {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-400" /> */}
              <FaMapMarkerAlt className="inline-block mr-2 text-lg text-slate-400 dark:text-slate-600" />
              Los Angeles, California
            </div>
            <div className="mb-2 text-slate-600 dark:text-slate-400 mt-10">
              {/* <i className="fas fa-briefcase mr-2 text-lg text-slate-400" /> */}
              <FaBriefcase className="inline-block mr-2 text-lg text-slate-400 dark:text-slate-600" />
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-slate-600 dark:text-slate-400">
              {/* <i className="fas fa-university mr-2 text-lg text-slate-400" /> */}
              <FaUniversity className="inline-block mr-2 text-lg text-slate-400 dark:text-slate-600" />
              University of Computer Science
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-slate-200 dark:border-slate-800 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-slate-700">
                  An artist of considerable range, Jenna the name taken by Melbourne-raised,
                  Brooklyn-based Nick Murphy writes, performs and records all of his own music,
                  giving it a warm, intimate feel with a solid groove structure. An artist of
                  considerable range.
                </p>
                <Link
                  href="#"
                  className="font-normal text-sky-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
