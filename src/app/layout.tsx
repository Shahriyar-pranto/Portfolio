import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeContext';
import { Toaster } from '@/components/ui/sonner';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Ahmed Shahriyar Parvez Pranto | UI/UX & Product Designer',
  description: 'Portfolio of Ahmed Shahriyar Parvez Pranto, a Dhaka-based UI/UX and Product Designer with 4+ years of experience designing eCommerce, web, mobile, SaaS, CRM, POS, HRM, and enterprise applications.',
  metadataBase: new URL('https://shahriyarux.vercel.app'),
  openGraph: {
    title: 'Ahmed Shahriyar Parvez Pranto | UI/UX & Product Designer',
    description: 'Product-focused UI/UX Designer creating user-centered web, mobile, eCommerce, and enterprise experiences.',
    url: 'https://shahriyarux.vercel.app',
    siteName: 'Ahmed Shahriyar Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
