import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

import {ConvexClientProvider} from './ConvexClientProvider';
import {Toaster} from 'sonner';
import {ThemeProvider} from '@/components/ThemeProvider';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/favicon.ico"
        sizes="2x2"
      />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange>
          <ConvexClientProvider>
            {children}
            <Toaster />
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
