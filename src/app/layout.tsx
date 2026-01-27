import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeContext";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Ahmed Shahriyar Parvez Pranto | UI/UX Designer",
  description: "UI/UX designer crafting intuitive web & mobile experiences. View the portfolio of Ahmed Shahriyar Parvez Pranto, focused on user-centered design.",
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
