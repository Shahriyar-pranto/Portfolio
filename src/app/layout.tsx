import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeContext";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Interactive Portfolio Website",
  description: "Ahmed Shahriyar's Portfolio",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
