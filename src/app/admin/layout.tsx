import React from 'react';

import { FooterAdmin } from '|/components/notus/footers/footer-admin';
import { HeaderStats } from '|/components/notus/headers/header-stats';
import { AdminNavbar } from '|/components/notus/navbars/admin-navbar';
import { Sidebar } from '|/components/notus/sidebar/sidebar';

export type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100 dark:bg-slate-900">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
