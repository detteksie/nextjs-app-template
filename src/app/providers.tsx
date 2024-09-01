'use client';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import React from 'react';

const comment = `

  =========================================================
  * Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim
  =========================================================

  * Product Page: https://www.creative-tim.com/product/notus-nextjs
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)

  * Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

  * Coded by Creative Tim

  =========================================================

  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  `;

type ProvidersProps = {
  children: React.ReactNode;
  session?: Session | null;
};

export function Providers({ children, session }: ProvidersProps) {
  const initialized = React.useRef(false);
  React.useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      document.insertBefore(document.createComment(comment), document.documentElement);
    }
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Theme
        // appearance="dark"
        accentColor="blue"
        grayColor="slate"
        panelBackground="translucent"
        radius="large"
        scaling="100%"
      >
        <SessionProvider session={session}>{children}</SessionProvider>
        <ThemePanel />
      </Theme>
    </ThemeProvider>
  );
}
