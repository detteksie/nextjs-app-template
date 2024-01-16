'use client';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import React from 'react';

type ProvidersProps = {
  children: React.ReactNode;
  session?: Session | null;
};

export function Providers({ children, session }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class">
      <Theme
        appearance="dark"
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
